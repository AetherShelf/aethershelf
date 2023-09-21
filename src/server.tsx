import { Elysia } from "elysia";
import type { Children } from "@kitajs/html";
import { htmxExtensionScript } from "beth-stack";
import { liveReloadScript } from "beth-stack/dev";
import Index from "./index";
import { html } from "@elysiajs/html";
import style from "./styles.css";

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
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script>${htmxExtensionScript}</script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <script>${liveReloadScript()}</script>
  <link href="/styles.css" rel="stylesheet">
</head>

<body hx-ext="revalidate" ${
  typeof classProp === "string" ? `class="${classProp}"` : ""
}>
${children}
</body>
`;

export type Page = ({
  html,
}: {
  html: (value: string) => Response;
}) => Response;

const app = new Elysia()
  .use(html())
  .get("/", Index)
  .get("/styles.css", ({ set }: { set: any }) => {
    set.headers["content-type"] = "text/css";
    return style;
  })
  .onStart(() => {
    void fetch("http://localhost:3001/restart");
    console.log("🦊 Triggering Live Reload");
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
