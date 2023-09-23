import { Elysia, t } from "elysia";
import type { Children } from "@kitajs/html";
import { htmxExtensionScript } from "beth-stack";
import { liveReloadScript } from "beth-stack/dev";
import Index from "./index";
import Logo from "./logo.svg";
import { html } from "@elysiajs/html";
import style from "./styles.css";
import { db } from "../db/client";
import { newsletterSignups } from "../db/schema";
const ogImage = Bun.file(__dirname + "/Logotype.png");

const DEV = process.env.NODE_ENV !== "production";

export const BaseHtml = ({
  children,
  class: classProp,
}: {
  children?: Children;
  class?: string;
}) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AetherShelf</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  ${
    DEV
      ? `<script>${htmxExtensionScript}</script><script>${liveReloadScript()}</script>`
      : ""
  }
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta name="description" content="Dive into your personal library anytime, anywhere. With AetherShelf, experience the magic of seamless cloud integration, true book ownership, and unparalleled reading freedom."> <!-- ˜150 chars -->
  <meta property="og:title" content="AetherShelf - Your personal library in the cloud.">
  <meta property="og:description" content="Dive into your personal library anytime, anywhere. With AetherShelf, experience the magic of seamless cloud integration, true book ownership, and unparalleled reading freedom."> <!-- ˜300 chars -->
  <meta property="og:site_name" content="AetherShelf Homepage">
  <meta property="og:locale" content="es_US">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://aethershelf.com">
  <meta property="og:image" content="http://aethershelf.com/og.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image:src" content="http://aethershelf.com/og.png">
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
  .use(html({ autoDetect: false }))
  .onRequest(({ set }) => {
    set.headers["X-Powered-By"] = "ElysiaJS";
    set.headers["X-Repo-Uri"] = "https://github.com/aethershelf/aethershelf";
  })
  .get("/", Index)
  .get("/og.png", async ({ set }) => {
    set.headers["content-type"] = "image/png";
    return ogImage;
  })
  .post(
    "/",
    async ({ html, body }) => {
      db.insert(newsletterSignups).values({ email: body.email }).execute();
      return html(
        <h2 class="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl xl:max-w-none xl:flex-auto">
          Thank you for your interest in AetherShelf
        </h2>
      );
    },
    {
      body: t.Object({
        email: t.String({ format: "email" }),
      }),
    }
  )
  .get("/favicon.svg", ({ set }) => {
    set.headers["content-type"] = "image/svg+xml";
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
