const functionModules = import.meta.glob('/functions/**/*.{js,ts}', { eager: false });
const htmlFiles = import.meta.glob("/src/*.html", {
	query: "?raw",
	import: "default",
});

function findMatch(pathname) {
  const candidates = [
    `/functions${pathname}.js`,
    `/functions${pathname}.ts`,
    `/functions${pathname}/index.js`,
    `/functions${pathname}/index.ts`,
  ];
  for (const key of Object.keys(functionModules)) {
    if (candidates.includes(key)) return key;
  }
  return null;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname.endsWith('/') && url.pathname !== '/'
      ? url.pathname.slice(0, -1)
      : url.pathname;
    if (pathname === "/.well-known/discord") {
      return new Response("dh=e699c94268fab8d8870eb277fa7506fa55838eab", {
        headers: { "Content-Type": "text/plain" },
      });
    }
		if (pathname === "/revolutionary_website") {
			return new Response(
				htmlFiles["/src/vibeslop.html"],
				{
					headers: { "Content-Type": "text/html" }
				}
			)
		}

    const matchedKey = findMatch(pathname);

    if (matchedKey) {
      try {
        const module = await functionModules[matchedKey]();
        if (typeof module.onRequest === 'function') {
          return await module.onRequest({ request, env, ctx });
        }
        if (typeof module.default === 'function') {
          return await module.default({ request, env, ctx });
        }
        return Response.json({ error: `No valid export in ${matchedKey}` }, { status: 500 });
      } catch (err) {
        return Response.json({ error: err.message, stack: err.stack }, { status: 500 });
      }
    }
    return env.ASSETS.fetch(request);
  },
};
