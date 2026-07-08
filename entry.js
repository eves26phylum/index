export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Standardise paths by stripping trailing slashes
    if (pathname.endsWith('/') && pathname !== '/') {
      pathname = pathname.slice(0, -1);
    }

    try {
      // 1. DYNAMICALLY RESOLVE PATHS: Construct paths pointing to your functions folder
      const targetJsModule = `../functions${pathname}.js`;
      const targetTsModule = `../functions${pathname}.ts`;

      let functionModule;

      try {
        // Attempt to dynamically fetch the JS function file path
        functionModule = await import(targetJsModule);
      } catch {
        try {
          // Fallback to testing for a TS function file variant
          functionModule = await import(targetTsModule);
        } catch {
          // No file exists in the directory. Break out to serve your static assets.
          functionModule = null;
        }
      }

      // 2. RUN FUNCTION IF RESOLVED: File found, invoke its handlers
      if (functionModule) {
        if (typeof functionModule.onRequest === 'function') {
          return await functionModule.onRequest({ request, env, ctx });
        } else if (typeof functionModule.default === 'function') {
          return await functionModule.default({ request, env, ctx });
        }
        return new Response(JSON.stringify({ error: "No export found" }), { 
          status: 500, 
          headers: { "Content-Type": "application/json" } 
        });
      }

    } catch (routingError) {
      // Catch exceptional script errors gracefully
      return new Response(JSON.stringify({ error: routingError.message }), { 
        status: 500, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    // 3. FALLBACK: Bypass to serving your client assets (React/Vite HTML index)
    return env.ASSETS.fetch(request);
  }
};
