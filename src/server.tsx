import { Elysia } from "elysia";
import type { Children } from "@kitajs/html";
import { htmxExtensionScript } from "beth-stack";
import { liveReloadScript } from "beth-stack/dev";
import Index from "./index";
const Logo = Bun.file("./src/Logo.png");
import { html } from "@elysiajs/html";
import style from "./styles.css";

const DEV = process.env.NODE_ENV !== "production";

export const BaseHtml = ({
  children,
  class: classProp,
}: {
  children: Children;
  class?: string;
}) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AetherShelf</title>
  ${
    DEV
      ? `<script>${htmxExtensionScript}</script><script>${liveReloadScript()}</script>`
      : ""
  }
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <link rel="icon" href="/favicon.png" type="image/png">
  <link href="/styles.css" rel="stylesheet">
</head>

<body hx-ext="revalidate" ${
  typeof classProp === "string" ? `class="${classProp}"` : ""
}>
${Array.isArray(children) ? children.join("") : children}
</body>
`;

export type Page = ({
  html,
}: {
  html: (value: string) => Response;
  [key: string]: any;
}) => Response;

const app = new Elysia()
  .use(html())
  .onRequest(({ set }: { set: any }) => {
    set.headers["X-Powered-By"] = "ElysiaJS";
    set.headers["X-Repo-Uri"] = "https://github.com/aethershelf/aethershelf";
  })
  .get("/", Index)
  .post("/signup", async ({ set }) => {
    set.redirect = "/?subscribed=true";
  })
  .get("/favicon.png", ({ set }) => {
    set.headers["content-type"] = "image/png";
    return Logo;
  })
  .get("/styles.css", ({ set }: { set: any }) => {
    set.headers["content-type"] = "text/css";
    return style;
  })
  .onStart(() => {
    if (DEV) {
      void fetch("http://localhost:3001/restart");
      console.log("🦊 Triggering Live Reload");
    }
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
