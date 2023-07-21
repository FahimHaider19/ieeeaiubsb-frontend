"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PlusIcon as PlusIconOutline } from "@heroicons/react/24/outline";

export default function CreateEvent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Events</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
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
                              Create New Event
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              This information will be displayed publicly so be
                              careful what you share.
                            </p>
                          </div>

                          <div className="sm:col-span-6 mt-6">
                            <label
                              htmlFor="event-title"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Title
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="event-title"
                                id="event-title"
                                autoComplete="event-title"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-6 mt-6">
                            <label
                              htmlFor="event-title"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Date
                            </label>
                            <div className="mt-1">
                              <input
                                type="date"
                                name="date"
                                className="block w-fit rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                              />
                            </div>
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
                                  workcation.com/
                                </span>
                                <input
                                  type="text"
                                  name="username"
                                  id="username"
                                  autoComplete="username"
                                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-6">
                              <label
                                htmlFor="about"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Event Body
                              </label>
                              <div className="mt-1">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows={3}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                  defaultValue={""}
                                />
                              </div>
                              <p className="mt-2 text-sm text-gray-500">
                                Write a few sentences about yourself.
                              </p>
                            </div>

                            <div className="sm:col-span-6">
                              <label
                                htmlFor="photo"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Photo
                              </label>
                              <div className="mt-1 flex items-center">
                                <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                  <svg
                                    className="h-full w-full text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                                <button
                                  type="button"
                                  className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                >
                                  Change
                                </button>
                              </div>
                            </div>

                            <div className="sm:col-span-6">
                              <label
                                htmlFor="cover-photo"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Cover photo
                              </label>
                              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                <div className="space-y-1 text-center">
                                  <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <div className="flex text-sm text-gray-600">
                                    <label
                                      htmlFor="file-upload"
                                      className="relative cursor-pointer rounded-md bg-white font-medium text-cyan-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 hover:text-cyan-500"
                                    >
                                      <span>Upload a file</span>
                                      <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                      />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-5">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:text-sm"
                      // onClick={() => setOpen(false)}
                    >
                      Go back to dashboard
                    </button>
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
