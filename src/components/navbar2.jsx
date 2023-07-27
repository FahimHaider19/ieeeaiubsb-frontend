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

import Options from './navbar options'
import MobileOptions from './navbar mobile options'

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
  },{
    name: 'Industry Applications Society',
    href: 'industry-application-society',
    icon: CheckIcon,
  },{
    name: 'Microwave Theory and Techniques Society',
    href: 'microwave-theory-techniques-society',
    icon: CheckIcon,
  },{
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

export default function NavBar2() {
  return (
    <>
      <div className="bg-white shadow">
        <Popover className="relative shadow">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center space-x-4 justify-between py-6 lg:justify-start">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="#">
                  <span className="sr-only">IEEEAIUBSB</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://ieeeaiubsb.com/wp-content/uploads/2020/09/ieeeaiubsb_logo-2.png"
                    alt=""
                  />
                </Link>
              </div>
              <Options />
              <div className="hidden items-center justify-end space-x-6 lg:flex lg:flex-1 lg:w-0">
                <Link
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-sky-700 py-2 px-4 text-base font-medium text-white hover:bg-sky-800"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>

          <MobileOptions />
        </Popover>
      </div>
    </>
  );
}
