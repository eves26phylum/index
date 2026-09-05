import blogs from "../dog/logs.json";

export const onRequest: PagesFunction = async (context) => {
	if (context.request.method !== "GET") {
			return new Response("Method Not Allowed", { status: 405 });
	}
	return Response.json(
		blogs
	)
}
