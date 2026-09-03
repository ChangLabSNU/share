import vinext from "vinext";
import { defineConfig, type Plugin } from "vite";

const siteBasePath = "/share/fonts";

function localBasePath(): Plugin {
  return {
    name: "qbio-local-base-path",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (request.url === siteBasePath || request.url === `${siteBasePath}/`) {
          response.statusCode = 302;
          response.setHeader("Location", "/");
          response.end();
          return;
        }
        if (request.url?.startsWith(`${siteBasePath}/`)) {
          request.url = request.url.slice(siteBasePath.length);
        }
        next();
      });
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? `${siteBasePath}/` : "/",
  plugins: [localBasePath(), vinext()],
}));
