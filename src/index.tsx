import { BaseHtml, type Page } from "./server";
import Logotype from "./logotype.svg";
import Lock from "./icons/Lock";
import Person from "./icons/Person";
import Document from "./icons/Cloud";

export default (({ html, query }) => {
  return html(
    <BaseHtml class="bg-white text-black dark:bg-black dark:text-white">
      <main class="pb-10 lg:pb-40">
        {/* Hero section */}
        <div class="relative isolate overflow-hidden">
          <svg
            class="absolute inset-0 -z-10 h-full w-full stroke-black/10 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x="50%"
              y="-1"
              class="overflow-visible fill-gray-200/20 dark:fill-gray-800/20"
            >
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <div
            class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
            ></div>
          </div>
          <div class="mx-auto max-w-7xl px-6 pt-10 pb-20 lg:pt-40 lg:flex lg:px-8">
            <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <Logotype class="fill-black dark:fill-white" />
              <h1 class="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                Elevate Your eBooks to the Aether
              </h1>
              <p class="mt-6 mb-10 text-lg leading-8 text-gray-800 dark:text-gray-200">
                Dive into your personal library anytime, anywhere. With
                AetherShelf, experience the magic of seamless cloud integration,
                true book ownership, and unparalleled reading freedom.
              </p>
              <div id="newsletter">
                <h2 class="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl xl:max-w-none xl:flex-auto">
                  Get notified when we’re launching.
                </h2>
                <form
                  class="mt-6 w-full max-w-md"
                  method="post"
                  hx-boost="true"
                  hx-swap="outerHTML show:no-scroll"
                  hx-target="#newsletter"
                >
                  <div class="flex gap-x-4">
                    <label for="email-address" class="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="block w-full bg-black/5 dark:bg-white/5 px-2.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 hover:ring-[#5ccefc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04a5e5] sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    ></input>
                    <button
                      type="submit"
                      class="flex-none rounded-md bg-[#04a5e5] px-2.5 py-1.5 text-sm font-semibold text-black dark:text-white shadow-sm hover:bg-[#5ccefc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04a5e5]"
                    >
                      Notify me
                    </button>
                  </div>
                  <p class="mt-4 text-sm leading-6 text-gray-800 dark:text-gray-200">
                    We care about your data. Read our{" "}
                    <a
                      href="#"
                      class="font-semibold text-gray-800 dark:text-gray-200 underline"
                    >
                      privacy&nbsp;policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
            <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt="App screenshot"
                  width="2432"
                  height="1442"
                  class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div class="mx-auto mt-4 max-w-7xl px-6 sm:mt-12 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Why AetherShelf?
            </h2>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div class="flex flex-col">
                <dt class="text-base font-semibold leading-7">
                  {/* 
      <stop stop-color="#04a5e5" />
      <stop offset="100%" stop-color="#8839ef" />
 */}
                  <Document
                    color="fill-[#04a5e5] dark:fill-[#5ccefc]"
                    class="mb-6 flex h-10 w-10 p-2 items-center justify-center rounded-lg bg-black/10 dark:bg-white/10"
                  />
                  Ethereal Syncing
                </dt>
                <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-70 dark:text-gray-300">
                  <p class="flex-auto">
                    Your personal eBook library will transcend device
                    boundaries. Upload your collection once, and access it on
                    any device, anytime, anywhere. The magic of the Aether
                    ensures your reading progress, bookmarks, and notes are
                    always in sync.
                  </p>
                  <p class="mt-2">
                    <a
                      href="#"
                      class="text-sm font-semibold leading-6 text-[#04a5e5] dark:text-[#5ccefc]"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div class="flex flex-col">
                <dt class="text-base font-semibold leading-7">
                  <Person
                    color="fill-[#04a5e5] dark:fill-[#5ccefc]"
                    class="mb-6 flex h-10 w-10 p-2 items-center justify-center rounded-lg bg-black/10 dark:bg-white/10"
                  />
                  True Ownership
                </dt>
                <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700 dark:text-gray-300">
                  <p class="flex-auto">
                    Your books should truly belong to you. Upload and manage
                    your personal eBook collection, whether in PDF or EPUB
                    format, without being tied to any service. Experience the
                    freedom of having all your books, irrespective of their
                    format, in one ethereal space, always ready for you to
                    access and never locked behind proprietary walls.
                  </p>
                  <p class="mt-2">
                    <a
                      href="#"
                      class="text-sm font-semibold leading-6 text-[#04a5e5] dark:text-[#5ccefc]"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div class="flex flex-col">
                <dt class="text-base font-semibold leading-7">
                  <Lock
                    color="fill-[#04a5e5] dark:fill-[#5ccefc]"
                    class="mb-6 flex h-10 w-10 p-2 items-center justify-center rounded-lg bg-black/10 dark:bg-white/10"
                  />
                  Guardian of Your Tomes
                </dt>
                <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700 dark:text-gray-300">
                  <p class="flex-auto">
                    Your books, your sanctuary. AetherShelf is built with a
                    staunch commitment to privacy. There's no sharing, no prying
                    eyes. Just a secure haven in the Aether for your cherished
                    collection, end-to-end encrypted with the latest encryption
                    standards<span class="sup">1</span>
                  </p>
                  <p class="mt-2">
                    <a
                      href="#"
                      class="text-sm font-semibold leading-6 text-[#04a5e5] dark:text-[#5ccefc]"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <footer aria-labelledby="footer-heading" class="relative">
        <h2 id="footer-heading" class="sr-only">
          Footer
        </h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div class="border-t border-black/10 dark:border-white/10 py-4 md:flex md:items-center md:justify-between">
            <div class="text-gray-400 text-xs">
              1. Will not be available available at launch or on free plan
            </div>
          </div>
          <div class="md:flex md:items-center md:justify-between">
            <div class="flex gap-6 md:order-2">
              <a href="#" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">Instagram</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">Twitter</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">GitHub</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">YouTube</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p class="mt-4 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2023 Kragelund Developments. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </BaseHtml>
  );
}) satisfies Page;
