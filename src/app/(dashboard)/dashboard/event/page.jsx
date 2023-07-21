'use client'
import CreateEvent from "./createEvent";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon, CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Invite team members",
    description:
      "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
  },
  {
    name: "List view",
    description:
      "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
  },
  {
    name: "Calendars",
    description:
      "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.",
  },
  {
    name: "Notifications",
    description:
      "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.",
  },
  {
    name: "Boards",
    description:
      "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.",
  },
  {
    name: "Reporting",
    description:
      "Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.",
  },
  {
    name: "Mobile app",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
];

const faqs = [
  {
    team: "WEB",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    team: "Publication",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    team: "Event Management",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    team: "Public Relaitons",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    team: "Graphics Designing",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export default function Event() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <CreateEvent />
        <div className="px-4 md:px-0  ">
          <div className="-mx-4 mt-8 pt-6 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-lg">
            <Events />
            <Events />
            <Events />
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Events() {
  return (
    <div className="mx-auto my-6 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 max-w-none">
      <div className="relative z-10 rounded-lg shadow-xl">
        <div
          className="pointer-events-none absolute inset-0 rounded-lg border-2 border-cyan-600"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 translate-y-px transform">
          <div className="flex -translate-y-1/2 transform justify-center">
            <span className="inline-flex rounded-full bg-cyan-600 px-4 py-1 text-base font-semibold text-white">
              Ongoing
            </span>
          </div>
        </div>
        <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
          <div>
            <div className="flex justify-between">
              <div className="flex ml-3">
                <span class="inline-flex mx-1 items-center rounded-md bg-cyan-100 px-2.5 py-0.5 text-sm font-medium text-cyan-800">
                  IEEEAIUBSB
                </span>
                <span class="inline-flex mx-1 items-center rounded-md bg-amber-100 px-2.5 py-0.5 text-sm font-medium text-amber-800">
                  CS
                </span>
                <span class="inline-flex mx-1 items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                  IAS
                </span>
              </div>
              <a
                href="#"
                className="place-self-end text-base font-semibold leading-7 text-cyan-600"
              >
                Details <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-2 flex items-center justify-start">
              <span className="flex items-start px-3 text-4xl tracking-tight text-gray-900 sm:text-5xl">
                {/* <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                  $
                </span> */}
                <span className="font-bold text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, et.
                </span>
              </span>
              {/* <span className="text-2xl font-medium text-gray-500">/month</span> */}
            </div>
          </div>
        </div>
        <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:py-10">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-12">
              <div className="mx-auto divide-y divide-gray-900/10">
                <h2 className="text-2xl text-center font-bold leading-10 tracking-tight text-gray-900">
                  Checklist
                </h2>
                <dl className="mt-10 divide-y divide-gray-900/10">
                  {faqs.map((faq) => (
                    <Disclosure
                      as="div"
                      key={faq.team}
                      className="p-6 lg:py-8"
                    >
                      {({ open }) => (
                        <>
                          <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                              <span className="text-base font-semibold leading-7">
                                {faq.team}
                              </span>
                              <div className="flex">
                                <span className="text-base font-semibold leading-7 text-cyan-600">
                                  4/6
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  {open ? (
                                    <PlusSmallIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <MinusSmallIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </div>
                            </Disclosure.Button>
                          </dt>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel as="dd" className="mt-2">
                              <p className="text-base leading-7 text-gray-600">
                                {faq.answer}
                                <dl className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 xl:grid-cols-3 lg:gap-y-16">
                                  {features.map((feature) => (
                                    <div
                                      key={feature.name}
                                      className="relative pl-9"
                                    >
                                      <dt className="font-semibold text-gray-900">
                                        <CheckIcon
                                          className="absolute top-1 left-0 h-5 w-5 text-cyan-500"
                                          aria-hidden="true"
                                        />
                                        {feature.name}
                                      </dt>
                                      <dd className="mt-2">
                                        {feature.description}
                                      </dd>
                                    </div>
                                  ))}
                                </dl>
                              </p>
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          {/* <div className="mt-10">
            <div className="rounded-lg shadow-md">
              <a
                href="#"
                className="block w-full rounded-lg border border-transparent bg-cyan-600 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-cyan-700"
                aria-describedby="tier-growth"
              >
                View Details
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
