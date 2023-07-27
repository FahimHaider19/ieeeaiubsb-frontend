'use client';
import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

const achievements = [
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
  {
    title: 'IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10',
    icon: '/images/icon/award1.png',
    year: "2022",
  },
]

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}

function Achievement({ title, icon, year, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <div className="text-gray-900">
        <div className="grid place-items-center">
          <img className='h-32' src={icon} alt="" />
        </div>
        <p className="mt-4 text-lg text-center font-medium leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
      </div>
      <figcaption className="mt-3 text-sm text-gray-600 text-center before:content-['–_']">
        {year}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function AchievementColumn({
  className,
  achievements,
  reviewClassName = () => { },
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {achievements.concat(achievements).map((review, reviewIndex) => (
        <Achievement
          key={reviewIndex}
          aria-hidden={reviewIndex >= achievements.length}
          className={reviewClassName(reviewIndex % achievements.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function AchievementGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(achievements, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <AchievementColumn
            achievements={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <AchievementColumn
            achievements={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <AchievementColumn
            achievements={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="achievements-title"
          className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl tracking-tight text-gray-900 text-center"
        >
          Achievements
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people have doubled their net-worth in the last 30 days.
        </p>
        <AchievementGrid />
      </Container>
    </section>
  )
}
