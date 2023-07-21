"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PlusIcon as PlusIconOutline } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";


export default function AddRoleMembers() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto"
            onClick={() => setOpen(true)}
          >
            Add user
          </button>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl   sm:p-6">
                  <div className="mx-auto max-w-3xl">
                    <form className="space-y-8 divide-y divide-gray-200">
                      <div className="space-y-8 divide-y divide-gray-200">
                        <div>
                          <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Add Role Member
                            </h3>
                          </div>

                          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Username
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                                  role id: 5001
                                </span>
                                <input
                                  type="text"
                                  name="username"
                                  id="username"
                                  autoComplete="username"
                                  value={"Public Relations"}
                                  readOnly
                                  disabled
                                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Username
                              </label>
                              <div className="relative">
                                <MagnifyingGlassIcon
                                  className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <input
                                  className="h-12 w-2/3 rounded-l-md border border-gray-300 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                                  placeholder="Search..."
                                  onChange={(event) =>
                                    setQuery(event.target.value)
                                  }
                                />
                                <button
                                  type="button"
                                  className="h-12 w-1/3 text-center rounded-r-md border border-gray-300 bg-transparent px-8 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm hover:bg-gray-100"
                                  onClick={() => alert("clicked")}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-5 w-full">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="w-1/2 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="w-1/2 ml-3 inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
