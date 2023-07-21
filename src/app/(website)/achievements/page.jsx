'use client'
import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

function DiamondIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 6 6" {...props}>
      <path d="M3 0L6 3L3 6L0 3Z" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  );
}

const days = [
  {
    name: "Opening Day",
    date: "April 4",
    dateTime: "2022-04-04",
    speakers: [
      {
        name: "Steven McHail",
        role: "Designer at Globex Corporation",
      },
      {
        name: "Jaquelin Isch",
        role: "UX Design at InGen",
      },
      {
        name: "Dianne Guilianelli",
        role: "General Manager at Initech",
      },
      {
        name: "Ronni Cantadore",
        role: "Design Engineer at Weyland-Yutani",
      },
      {
        name: "Erhart Cockrin",
        role: "Product Lead at Cyberdyne Systems",
      },
      {
        name: "Parker Johnson",
        role: "UI Designer at MomCorp",
      },
    ],
  },
  {
    name: "Speakers & Workshops",
    date: "April 5",
    dateTime: "2022-04-05",
    speakers: [
      {
        name: "Damaris Kimura",
        role: "Senior Engineer at OCP",
      },
      {
        name: "Ibrahim Frasch",
        role: "Programmer at Umbrella Corp",
      },
      {
        name: "Cathlene Burrage",
        role: "Frontend Developer at Buy n Large",
      },
      {
        name: "Rinaldo Beynon",
        role: "Data Scientist at Rekall",
      },
      {
        name: "Waylon Hyden",
        role: "DevOps at RDA Corporation",
      },
      {
        name: "Giordano Sagucio",
        role: "Game Developer at Soylent Corp",
      },
    ],
  },
  {
    name: "Interviews",
    date: "April 6",
    dateTime: "2022-04-06",
    speakers: [
      {
        name: "Andrew Greene",
        role: "Frontend Developer at Ultratech",
      },
      {
        name: "Heather Terry",
        role: "Backend Developer at Xanatos Enterprises",
      },
      {
        name: "Piers Wilkins",
        role: "Full stack Developer at BiffCo",
      },
      {
        name: "Gordon Sanderson",
        role: "Mobile Developer at Cobra Industries",
      },
      {
        name: "Kimberly Parsons",
        role: "Game Developer at Tyrell Corporation",
      },
      {
        name: "Richard Astley",
        role: "CEO at Roll Out",
      },
    ],
  },
  {
    name: "Interviews",
    date: "April 6",
    dateTime: "2022-04-06",
    speakers: [
      {
        name: "Andrew Greene",
        role: "Frontend Developer at Ultratech",
      },
      {
        name: "Heather Terry",
        role: "Backend Developer at Xanatos Enterprises",
      },
      {
        name: "Piers Wilkins",
        role: "Full stack Developer at BiffCo",
      },
      {
        name: "Gordon Sanderson",
        role: "Mobile Developer at Cobra Industries",
      },
      {
        name: "Kimberly Parsons",
        role: "Game Developer at Tyrell Corporation",
      },
      {
        name: "Richard Astley",
        role: "CEO at Roll Out",
      },
    ],
  },
  {
    name: "Interviews",
    date: "April 6",
    dateTime: "2022-04-06",
    speakers: [
      {
        name: "Andrew Greene",
        role: "Frontend Developer at Ultratech",
      },
      {
        name: "Heather Terry",
        role: "Backend Developer at Xanatos Enterprises",
      },
      {
        name: "Piers Wilkins",
        role: "Full stack Developer at BiffCo",
      },
      {
        name: "Gordon Sanderson",
        role: "Mobile Developer at Cobra Industries",
      },
      {
        name: "Kimberly Parsons",
        role: "Game Developer at Tyrell Corporation",
      },
      {
        name: "Richard Astley",
        role: "CEO at Roll Out",
      },
    ],
  },
];



export default function Speakers() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section id="speakers" aria-labelledby="speakers-title" className="grid place-items-center">
      <div className="max-w-7xl">
      <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="speakers-title" className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"> Speakers </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Learn from the experts on the cutting-edge of deception at the most
            sinister companies.
          </p>
        </div>
        <Tab.Group as="div" vertical={tabOrientation === "vertical"} className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon className={clsx("absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block",
                        dayIndex === selectedIndex
                          ? "fill-blue-600 stroke-blue-600"
                          : "fill-transparent stroke-slate-400"
                      )}
                    />
                    <div className="relative">
                      <div className={clsx("font-mono text-sm", dayIndex===selectedIndex ? "text-blue-600": "text-slate-500")}>
                        <Tab className="border-none ring-0">
                          {/* <span className="absolute inset-0" /> */}
                          {/* {day.name} */}
                          <dev dateTime={day.dateTime} className="inset-0 mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900">
                            {day.date}
                          </dev>
                        </Tab>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel key={day.dateTime} className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3" unmount={false}>
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          "absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                          [
                            "border-blue-300",
                            "border-indigo-300",
                            "border-sky-300",
                          ][speakerIndex % 3]
                        )}
                      />
                      <div className="absolute inset-0 bg-indigo-50" style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}>
                        <img
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsteven-mchail.4e94472e.jpg&w=384&q=75"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900"> {speaker.name} </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500"> {speaker.role} </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      {/* <ImageClipPaths id={id} />
      <Container>
      </Container> */}
      </div>
    </section>
  );
}
