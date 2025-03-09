import { serve } from "https://deno.land/std@0.204.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.204.0/http/file_server.ts";

const handler = async (request: Request): Promise<Response> => {
  return await serveDir(request, {
    fsRoot: "./docs",
    urlRoot: "",
    showDirListing: true,
  });
};

console.log("Server running at http://localhost:8000");
await serve(handler, { port: 8000 });