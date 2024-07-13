import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function GettingStarted() {
  return (
    <div className=" h-full">
      <div>
        <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Subscribe to our newsletter.
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Nostrud amet eu ullamco nisi aute in ad minim nostrud
                  adipisicing velit quis. Duis tempor incididunt dolore.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CalendarDaysIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-white">
                    Weekly articles
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Non laboris consequat cupidatat laborum magna. Eiusmod non
                    irure cupidatat duis commodo amet.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <HandRaisedIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-white">No spam</dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Officia excepteur ullamco ut sint duis proident non
                    adipisicing. Voluptate incididunt anim.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 h-full">
        <div className="border-r p-6">
          <h4 className="text-blue-400 font-medium">Introduction</h4>
          <ul className="text-sm pl-6">
            <li>Getting Started</li>
          </ul>
        </div>
        <div className="col-span-5 p-6">
          <div>
            <h5 className="text-blue-400 font-medium">Introduction</h5>
            <h1 className="text-2xl text-slate-400">Welcome to the web</h1>

            <div className="my-6 space-y-6">
              <h4>Who is this course for?</h4>
              <ul>
                <li>
                  You do not need to know how to code for this course; basic
                  internet browsing would be enough
                </li>
                <li>
                  Course is created for a students who cna use basic internet
                  fundamentals
                </li>
                <li>You will gain a skill to create a million dollar apps</li>
                <li>HTML CSS Javascript for creating website from scratch</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Setup</h4>

            <div className="my-6 space-y-6">
              <ul>
                <li>
                  Laptop - mac , windows min requirement above 4 gb of ram as
                  its not too much of computational heavy
                </li>
                <li>
                  VS code application - for writing code and showing vs code
                  tips and tricks
                </li>
                <li>
                  VS code setting - whatever is comfortable with you - themes
                  can be changed over time
                </li>
              </ul>
              <p>
                Please bookmark and start this repo for making it more
                discoverable.
              </p>
            </div>
          </div>
          <div>
            <h4>Expectations from students</h4>

            <div className="my-6 space-y-6">
              <ul>
                <li>Gaining enough knowledge to get land your first job</li>

                <li>
                  You will struggle to learn but do not discourage yourself you
                  will reach there.
                </li>
                <li>
                  Do not compare with other develops with different coding and
                  practice.
                </li>
                <li>
                  If you want to get a job then you have to stick to the
                  learnings.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Recommendations</h4>

            <div className="my-6 space-y-6">
              <ul>
                <li>
                  IDE (Integrated development environment)
                  <ul>
                    <li>
                      - VS code{" "}
                      <span className="font-semibold text-sm">
                        (Recommended)
                      </span>
                    </li>
                    <li>- Sublime </li>
                    <li>- WebStorm etc. </li>
                  </ul>
                </li>

                <li>
                  Browsers
                  <ul>
                    <li>
                      Chrome{" "}
                      <span className="font-semibold text-sm">
                        (Recommended)
                      </span>
                      <ul>
                        <li>- used more in industry</li>
                        <li>- good dev tools</li>
                      </ul>
                    </li>
                    <li>
                      Firebox
                      <ul>
                        <li>- good dev tools</li>
                      </ul>
                    </li>
                    <li>Safari</li>
                  </ul>
                </li>
              </ul>
              <p className="text-slate-400">
                As a developer you have to test you application across all
                browsers
              </p>
            </div>
          </div>
          <div>
            <h4>Resources</h4>

            <div className="my-6 space-y-6">
              <p className="text-slate-400">
                Its important to get your news and updates from quality of
                sources.
              </p>
              <ul>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla MDN
                  </a>
                  - industry standard information for html, css, javascript
                </li>
                <li>
                  <a
                    href="https://css-tricks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSS tricks
                  </a>
                  for css for front end dev and is accurate
                </li>

                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  framework and library direct from github
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
