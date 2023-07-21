"use client";
import React, { useState } from "react";
import AddRoleMembers from "./addRoleMembers";

const tabs = [
  { name: "Roles", href: "#", current: true },
  { name: "Person", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.current).name
  );

  function handleTabChange(event) {
    setActiveTab(event.target.value);
  }

  return (
    <div className="bg-white rounded-lg sm:p-12">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          value={activeTab}
          onChange={handleTabChange}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.name === activeTab
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                )}
                onClick={() => setActiveTab(tab.name)}
                aria-current={tab.name === activeTab ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "Roles" && (
          <div>
            <h2 className="text-lg font-semibold">Roles</h2>
            <Roles />
          </div>
        )}
        {activeTab === "Person" && (
          <div>
            <h2 className="text-lg font-semibold">Person</h2>
            <p>
              Sed interdum dolor nec iaculis ultrices. Nullam imperdiet, justo
              ac lacinia lobortis, nunc metus pharetra lacus, in dictum mi orci
              id justo. Sed luctus commodo metus, et euismod velit dapibus a. Ut
              varius mi elit, non blandit nisi ultrices a. Integer blandit
              dapibus neque, vitae feugiat orci efficitur eu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

import { Fragment } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { UsersIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    phone: "1-493-747-9031",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "John Doe",
    phone: "1-234-567-8901",
    email: "johndoe@example.com",
    role: "Manager",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    phone: "1-234-567-8902",
    email: "janesmith@example.com",
    role: "Engineer",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
  {
    id: 4,
    name: "Michael Johnson",
    phone: "1-234-567-8903",
    email: "michaeljohnson@example.com",
    role: "Designer",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
  {
    id: 5,
    name: "Emily Davis",
    phone: "1-234-567-8904",
    email: "emilydavis@example.com",
    role: "Sales Representative",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
  {
    id: 6,
    name: "James Wilson",
    phone: "1-234-567-8905",
    email: "jameswilson@example.com",
    role: "Analyst",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
  {
    id: 7,
    name: "Olivia Thompson",
    phone: "1-234-567-8906",
    email: "oliviathompson@example.com",
    role: "Marketing Specialist",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
  {
    id: 8,
    name: "David Anderson",
    phone: "1-234-567-8907",
    email: "davidanderson@example.com",
    role: "Accountant",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
  {
    id: 9,
    name: "Sophia Garcia",
    phone: "1-234-567-8908",
    email: "sophiagarcia@example.com",
    role: "HR Manager",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
  {
    id: 10,
    name: "Daniel Rodriguez",
    phone: "1-234-567-8909",
    email: "danielrodriguez@example.com",
    role: "Developer",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl: "https://example.com/default-image.png",
  },
];

const recent = [
  people[0],
  people[4],
  people[8],
  people[9],
  people[2],
  people[1],
];

export function Roles() {
  const [query, setQuery] = useState("");
  const [activeOption, setActiveOption] = useState(null);

  const filteredPeople =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const handlePersonClick = (person) => {
    setActiveOption(person);
  };

  return (
    <div className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
      <Combobox onChange={(person) => (window.location = person.profileUrl)}>
        {({ activeOption }) => (
          <>
            <div className="relative">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            {(query === "" || filteredPeople.length > 0) && (
              <Combobox.Options
                as="div"
                static
                hold
                className="flex divide-x divide-gray-100"
              >
                <div
                  className={classNames(
                    "min-w-0 overflow-hidden flex-auto scroll-py-4 overflow-y-auto px-1 sm:px-6 py-4",
                    activeOption && "sm:h-96"
                  )}
                >
                  {query === "" && (
                    <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                      Roles
                    </h2>
                  )}
                  <div className="-mx-2 text-sm text-gray-700">
                    {(query === "" ? people : filteredPeople).map((person) => (
                      <Combobox.Option
                        as="div"
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            "flex cursor-default select-none items-center rounded-md p-2",
                            active && "bg-gray-100 text-gray-900"
                          )
                        }
                        onClick={() => handlePersonClick(person)}
                      >
                        {({ active }) => (
                          <>
                            <img
                              src={person.imageUrl}
                              alt=""
                              className="sm-max:hidden h-6 w-6 flex-none rounded-full"
                            />
                            <span className="ml-3 flex-auto truncate">
                              {person.name}
                            </span>
                            {active && (
                              <ChevronRightIcon
                                className="ml-3 h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </div>
                </div>

                {activeOption && (
                  <div className="h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex truncate p-2">
                    <AddRoleMembers />
                    {activeOption.name}
                    {activeOption.role}
                    {/* <div className="flex-none p-6 text-center">
                      <h2 className="mt-3 font-semibold text-gray-900">
                        {activeOption.name}
                      </h2>
                      <p className="text-sm leading-6 text-gray-500"></p>
                    </div>
                    <div className="flex flex-auto flex-col justify-between p-6">
                      <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                        <dt className="col-end-1 font-semibold text-gray-900">
                          Phone
                        </dt>
                        <dd>{activeOption.phone}</dd>
                        <dt className="col-end-1 font-semibold text-gray-900">
                          URL
                        </dt>
                        <dd className="truncate">
                          <a
                            href={activeOption.url}
                            className="text-indigo-600 underline"
                          >
                            {activeOption.url}
                          </a>
                        </dd>
                        <dt className="col-end-1 font-semibold text-gray-900">
                          Email
                        </dt>
                        <dd className="truncate">
                          <a
                            href={`mailto:${activeOption.email}`}
                            className="text-indigo-600 underline"
                          >
                            {activeOption.email}
                          </a>
                        </dd>
                      </dl>
                      <button
                        type="button"
                        className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Send message
                      </button>
                    </div> */}
                  </div>
                )}
              </Combobox.Options>
            )}
          </>
        )}
      </Combobox>
    </div>
  );
}


