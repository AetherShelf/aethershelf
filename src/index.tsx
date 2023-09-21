import type { Page } from "./server";
import { BaseHtml } from "./server";
import Logotype from "./Logotype.svg";
import { LinearGradient } from "../lib/svgPlugin";

export default (({ html }) =>
  html(
    <BaseHtml class="flex h-screen w-screen justify-center items-center flex-col bg-[#181825] p-12 text-center">
      <Logotype class="max-w-4xl">
        <defs>
          <LinearGradient id="rfoot">
            <stop stop-color="#eff1f5" />
          </LinearGradient>
          <LinearGradient id="letters">
            <stop stop-color="#04a5e5" />
            <stop offset="100%" stop-color="#8839ef" />
          </LinearGradient>
        </defs>
      </Logotype>
      <h1 class="text-5xl text-[#eff1f5]">
        Your personal bookshelf in the cloud. Coming Soon...
      </h1>
    </BaseHtml>,
  )) satisfies Page;
