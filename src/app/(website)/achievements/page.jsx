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

const achievements = [
  {
    year: "2022",
    records: [
      {
        title: "Steven McHail",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Jaquelin Isch",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Dianne Guilianelli",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Ronni Cantadore",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Erhart Cockrin",
        icon: "/images/icon/award1.png",
      },
    ],
  },
  {
    year: "2021",
    records: [
      {
        title: "Damaris Kimura",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Ibrahim Frasch",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Cathlene Burrage",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Rinaldo Beynon",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Waylon Hyden",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Giordano Sagucio",
        icon: "/images/icon/award1.png",
      },
    ],
  },
  {
    year: "2020",
    records: [
      {
        title: "Andrew Greene",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Heather Terry",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Piers Wilkins",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Gordon Sanderson",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Kimberly Parsons",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Richard Astley",
        icon: "/images/icon/award1.png",
      },
    ],
  },
  {
    year: "2019",
    records: [
      {
        title: "Andrew Greene",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Heather Terry",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Piers Wilkins",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Gordon Sanderson",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Kimberly Parsons",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Richard Astley",
        icon: "/images/icon/award1.png",
      },
    ],
  },
  {
    year: "2018",
    records: [
      {
        title: "Andrew Greene",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Heather Terry",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Piers Wilkins",
        icon: "F",
      },
      {
        title: "Gordon Sanderson",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Kimberly Parsons",
        icon: "/images/icon/award1.png",
      },
      {
        title: "Richard Astley",
        icon: "/images/icon/award1.png",
      },
      
    ],
  },
];



export default function records() {
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
    <section id="records" aria-labelledby="records-title" className="grid place-items-center">
      <div className="max-w-7xl w-full p-8">
      <div className="mx-auto w-full lg:mx-0 grid place-items-center">
        <h1 className="mt-6 md:mt-12 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
           Achievements
        </h1>
        </div>
        <Tab.Group as="div" vertical={tabOrientation === "vertical"} className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
          <div className="relative flex pb-4 sm:mx-0 sm:block sm:pb-0 p-5 md:justify-self-center lg:justify-self-end">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 w-full overflow-scroll px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                achievements.map((achievement, dayIndex) => (
                  <div key={achievement.year} className="relative lg:pl-8">
                    <DiamondIcon className={clsx("absolute top-[0.5625rem] left-[0.3px] hidden h-1.5 w-1.5 lg:block",
                        dayIndex === selectedIndex
                          ? "fill-cyan-600 stroke-cyan-600"
                          : "fill-transparent stroke-slate-400"
                      )}
                    />
                    <div className="relative">
                      <div className={clsx("font-mono text-sm", dayIndex===selectedIndex ? "text-cyan-600": "text-slate-500")}>
                        <Tab className="">
                          {/* <span className="absolute inset-0" /> */}
                          {/* {achievement.title} */}
                          <dev year={achievement.year} className="inset-0 mt-1.5 pb-3 block text-2xl font-semibold tracking-tight text-cyan-900">
                            {achievement.year}
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
            {achievements.map((achievement) => (
              <Tab.Panel key={achievement.year} className="flex flex-row flex-wrap justify-around gap-x-8 gap-y-10 sm:gap-y-16" unmount={false}>
                {achievement.records.map((record, recordIndex) => (
                  <div key={recordIndex} className="w-fit">
                    {/* <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl"> */}
                      {/* <div
                        className={clsx(
                          "absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                          [
                            "border-cyan-300",
                            "border-indigo-300",
                            "border-sky-300",
                          ][recordIndex % 3]
                        )}
                      />
                      <div className="absolute inset-0 bg-indigo-50" style={{ clipPath: `url(#${id}-${recordIndex % 3})` }}>
                        <img
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsteven-mchail.4e94472e.jpg&w=384&q=75"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900"> {record.title} </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500"> {record.icon} </p> */}
                    <div class="text-gray-900">
                      <div class="grid place-items-center">
                        <img class="h-60 w-60" src={record.icon} alt=""/>
                      </div>
                      <p class="mt-4 text-lg text-center font-medium leading-6 before:content-['“'] after:content-['”']">{record.title}</p>
                    </div>
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
