'use client'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

const sortBy = [


  { name: 'Events', selected: true },
  { name: 'Person', selected: true },
  { name: 'All', selected: true },
]

const sortOptions = [
  { name: 'Sort by Events', href: '#' },
  { name: 'Sort by Person', href: '#' },
  { name: 'All', href: '#' },
]


const filters = [
  {
    id: 'Events',
    name: 'Events',
    options: [
      { value: '000', label: 'All' },
      { value: '5000', label: 'Spave 6.0' },
      { value: '5001', label: 'IEEE Xtreme 17.0' },
      { value: '5002', label: 'Wie Day 2023' },
    ],
  },
  {
    id: 'Person',
    name: 'Person',
    options: [
      { value: '1001', label: 'Tanil' },
      { value: '1002', label: 'Riad' },
      { value: '1003', label: "Adil" },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [mem, setMem] = useState(sortBy[2])
  return (
    <div className="bg-gray-50">
      {/* Mobile filter dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  <div class="flex items-center">
                    <input
                      id="color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label for="color-0" class="ml-3 text-sm text-gray-600">
                      Pending Only
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label for="color-0" class="ml-3 text-sm text-gray-600">
                      Former
                    </label>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>

        <section
          aria-labelledby="filter-heading"
          className="border-t border-gray-200 py-6"
        >
          <h2 id="filter-heading" className="sr-only">
            Product filters
          </h2>

          <div className="flex items-center justify-between">
            <Menu as="div" className="relative inline-block text-left">
              {/* <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">RAM</h2>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  See performance specs
                </a>
              </div> */}

              <RadioGroup value={mem} onChange={setMem} className="mt-2 ">
                {/* <RadioGroup.Label className="sr-only">

                </RadioGroup.Label> */}
                <div className="flex rounded-lg overflow-hidden m-1 bg-gray-200">
                  {sortBy.map((option) => (
                    <RadioGroup.Option
                      key={option.name}
                      value={option}
                      className={({ active, checked }) =>
                        classNames(
                          option.selected
                            ? "cursor-pointer focus:outline-none bg-gray-200"
                            : "opacity-25 cursor-not-allowed bg-gray-200",
                          // active ? "ring-2 ring-offset-2 ring-indigo-500 mr-1" : "",
                          checked
                            ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                            : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50",
                          "border py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                        )
                      }
                      disabled={!option.selected}
                    >
                      <RadioGroup.Label as="span" className="text-xs">
                        {option.name}
                      </RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              {/* <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div> */}

              {/* <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm font-medium text-gray-900'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition> */}
            </Menu>

            <button
              type="button"
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filters
            </button>

            <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-4">
              {filters.map((section, sectionIdx) => (
                <Popover
                  as="div"
                  key={section.name}
                  id={`desktop-menu-${sectionIdx}`}
                  className="relative inline-block text-left"
                >
                  <div>
                    <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <span>{section.name}</span>
                      {sectionIdx === 0 ? (
                        <span className="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700">
                          1
                        </span>
                      ) : null}
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-gray-200 p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 whitespace-nowrap pr-6 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </form>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ))}
              <div class="flex items-center">
                <input
                  id="color-0"
                  name="color[]"
                  value="white"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="color-0" class="ml-3 text-sm text-gray-600">
                  Pending
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="color-0"
                  name="color[]"
                  value="white"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="color-0" class="ml-3 text-sm text-gray-600">
                  Former
                </label>
              </div>
            </Popover.Group>
          </div>
        </section>
      </div>
    </div>
  );
}


