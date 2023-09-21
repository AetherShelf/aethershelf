import type { Page } from "./server";
import { BaseHtml } from "./server";
import Logotype from "./Logotype.svg";
import { LinearGradient } from "../lib/svgPlugin";

export default (({ html, query }) => {
  return html(
    <BaseHtml class="flex h-screen w-screen justify-center items-center flex-col bg-[#eff1f5] p-12 text-center gap-8 text-[#4c4f69] dark:bg-[#1e1e2e] dark:text-[#eff1f5]">
      <Logotype class="max-w-3xl fill-current">
        <defs>
          <LinearGradient id="letters">
            <stop stop-color="#04a5e5" />
            <stop offset="100%" stop-color="#8839ef" />
          </LinearGradient>
        </defs>
      </Logotype>
      <p class="max-w-[60ch] text-sm md:text-lg">
        AetherShelf elevates your personal eBook collection to the cloud,
        granting you ethereal access across all your devices. Say goodbye to
        device restrictions and proprietary platforms. Your books, your way,
        anywhere you go.
      </p>
      <div class="flex flex-col gap-2 items-center">
        <h2 class="max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {query.subscribed === ""
            ? "Thanks for your interest in AetherShelf"
            : "Get notified when we’re launching."}
        </h2>
        {query.subscribed === "" ? (
          ""
        ) : (
          <form
            class="mt-2 flex flex-col sm:flex-row max-w-md gap-4 w-full"
            action="/signup"
            method="POST"
          >
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              class="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 shadow dark:shadow-[#eff1f5]/30 ring-1 ring-inset ring-[#4c4f69]/10 placeholder:text-opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow dark:shadow-[#eff1f5]/30 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Notify me
            </button>
          </form>
        )}
      </div>
    </BaseHtml>
  );
}) satisfies Page;
