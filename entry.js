// Creates a compile-time map of every single file inside your functions directory
const functionsDirectory = import.meta.glob('/functions/**/*.{js,ts}');

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Remove trailing slash for uniform route checking
    if (pathname.endsWith('/') && pathname !== '/') {
      pathname = pathname.slice(0, -1);
    }

    // 1. Map the request path directly to possible file paths inside /functions
    const exactJsFile = `/functions${pathname}.js`;
    const exactTsFile = `/functions${pathname}.ts`;
    const indexJsFile = `/functions${pathname}/index.js`;
    const indexTsFile = `/functions${pathname}/index.ts`;

    // 2. FILE EXISTS CHECK: Look up if the file path exists in our directory map
    const matchingFileKey =
      exactJsFile in functionsDirectory ? exactJsFile :
        exactTsFile in functionsDirectory ? exactTsFile :
          indexJsFile in functionsDirectory ? indexJsFile :
            indexTsFile in functionsDirectory ? indexTsFile : null;

    // 3. EXECUTE IF FOUND: If the file exists, import it and run the handler
    if (matchingFileKey) {
      try {
        const module = await functionsDirectory[matchingFileKey]();

        // Execute Pages-style handler or standard default export
        if (typeof module.onRequest === 'function') {
          return await module.onRequest({ request, env, ctx });
        } else if (typeof module.default === 'function') {
          return await module.default({ request, env, ctx });
        }

        return Response.json({ error: `Missing valid export in ${matchingFileKey}` }, { status: 500 });
      } catch (err) {
        return Response.json({ error: `Execution error: ${err.message}` }, { status: 500 });
      }
    }

    // 4. FALLBACK: No file exists at that path in the functions folder. Serve static asset or SPA.
    return env.ASSETS.fetch(request);
  }
};
