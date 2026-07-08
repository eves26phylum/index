interface Env {
    pizza_db: D1Database;
}

interface OrderRow {
    username: string;
    ip_address: string;
}

interface CounterRow {
    current_count: number;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    try {
        const clientIP = context.request.headers.get("CF-Connecting-IP") || "127.0.0.1";
        const existingClaim = await context.env.pizza_db.prepare(
            "SELECT id FROM pizza_orders WHERE ip_address = ?"
        ).bind(clientIP).first();

        if (context.request.method === "GET") {
            const counter = await context.env.pizza_db.prepare(
                "SELECT current_count FROM pizza_counter WHERE id = 1"
            ).first<CounterRow>();

            const { results } = await context.env.pizza_db.prepare(
                "SELECT username FROM pizza_orders ORDER BY id DESC"
            ).all<OrderRow>();

            return Response.json({
                success: true,
                count: counter ? counter.current_count : 0,
                users: results.map(row => row.username),
                claimed: existingClaim
            });
        }

        if (context.request.method !== "POST") {
            return new Response("Method Not Allowed", { status: 405 });
        }

        const { username } = await context.request.json<{ username?: string }>();
        if (!username || username.trim() === "") {
            return new Response("Username is required", { status: 400 });
        }
        if (username.length > 50) {
            return new Response("Your username.. is very long. Consider shortening it.", { status: 400 })
        }
        if (existingClaim) {
            return new Response("You have already claimed a pizza! No need to be greedy.", { status: 403 });
        }

        const counter = await context.env.pizza_db.prepare(
            "SELECT current_count FROM pizza_counter WHERE id = 1"
        ).first<CounterRow>();

        if (!counter || counter.current_count <= 0) {
            const allUsers = await context.env.pizza_db.prepare("SELECT username FROM pizza_orders").all<OrderRow>();
            return Response.json({ success: false, count: 0, users: allUsers.results.map(r => r.username) });
        }

        const newCount = counter.current_count - 1;
        await context.env.pizza_db.batch([
            context.env.pizza_db.prepare("UPDATE pizza_counter SET current_count = ? WHERE id = 1").bind(newCount),
            context.env.pizza_db.prepare("INSERT INTO pizza_orders (username, ip_address) VALUES (?, ?)").bind(username.trim(), clientIP)
        ]);

        const { results } = await context.env.pizza_db.prepare(
            "SELECT username FROM pizza_orders ORDER BY id DESC"
        ).all<OrderRow>();

        return Response.json({ success: true, count: newCount, users: results.map(row => row.username) });

    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
};
