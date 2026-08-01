const blogFiles = import.meta.glob("../dog/blogs_content/*.xml", {
	query: "?raw",
	import: "default",
});
export const onRequest: PagesFunction = async (context) => {
	if (context.request.method !== "GET") {
			return new Response("Method Not Allowed", { status: 405 });
	}
	const url = new URL(context.request.url);
  const blogId = url.searchParams.get("blogId");
	if (!blogId) {
    return new Response("Bad Request", { status: 400 });
  }

  const load = blogFiles[`../dog/blogs_content/${blogId}.xml`]; // was .ts
	if (!load) {
		return new Response("Not Found", { status: 404 });
	}
	const blog_content = await load();
	return Response.json(
		{
			"blog_content": blog_content
		}
	)
}
