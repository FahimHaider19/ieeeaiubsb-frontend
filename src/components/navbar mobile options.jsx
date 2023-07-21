"use client"
import { Fragment } from 'react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

// Home
// Chapters and Affinity Group
// Activity
//   Events
//   Publication/Abozzo
//   Gallery
// Team


const about = [
  {
    name: 'About IEEE',
    href: 'about-ieee',
    icon: CheckIcon,
  },
  {
    name: 'IEEE R10',
    href: 'about-r10',
    icon: CheckIcon,
  },
  {
    name: 'IEEE Bangladesh Section',
    href: 'about-ieeebds',
    icon: CheckIcon,
  },
  {
    name: 'IEEE AIUB Student Branch',
    href: 'about',
    icon: CheckIcon,
  }
]

const chaptersandaffinitygroup = [
  {
    name: 'Computer Society',
    href: 'computer-society',
    icon: CheckIcon,
  },
  {
    name: 'Engineering in Medicine and Biology Society',
    href: 'engineering-in-medicine-and-biology-society',
    icon: CheckIcon,
  }, {
    name: 'Industry Applications Society',
    href: 'industry-application-society',
    icon: CheckIcon,
  }, {
    name: 'Microwave Theory and Techniques Society',
    href: 'microwave-theory-techniques-society',
    icon: CheckIcon,
  }, {
    name: 'WIE Affinity Group',
    href: 'women-in-engineering',
    icon: CheckIcon,
  }
]

const activity = [
  {
    name: 'Our Events',
    href: 'our-events',
    icon: CheckIcon,
  },
  {
    name: 'Achievements',
    href: 'achievements',
    icon: CheckIcon,
  },
  {
    name: 'Abozzo',
    href: 'abozzo',
    icon: CheckIcon,
  },
  {
    name: 'Gallery',
    href: 'gallery',
    icon: CheckIcon,
  }
]

const team = [
  {
    name: 'Our Team',
    href: 'our-team',
    icon: CheckIcon,
  },
  {
    name: 'Membership',
    href: 'membership',
    icon: CheckIcon,
  },
]

const links = [
  {
    name: 'Home',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'About',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Chapters and Affinity Group',
    href: '#',
    icon: ShieldCheckIcon
  },
  {
    name: 'Publications',
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Achievements',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Our Team',
    href: '#',
    icon: PlayIcon,
  },
  {
    name: 'Contact',
    href: 'contact',
    icon: PhoneIcon,
  }

]

const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function MobileOptions() {
  return (
    <>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://ieeeaiubsb.com/wp-content/uploads/2020/09/ieeeaiubsb_logo-2.png"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {links.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-cyan-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                          <CalendarIcon className="h-6 w-6 flex-shrink-0 text-cyan-600" />
                          <span className="mx-3 text-base font-medium text-gray-900">What is your refund policy?</span>
                          <ChevronUpIcon
                            className={`${open ? '' : 'rotate-180 transform right-0'
                              } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            abcd
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  )
}