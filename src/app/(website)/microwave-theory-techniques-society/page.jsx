import { AcademicCapIcon, ArrowPathIcon, BanknotesIcon, CloudArrowUpIcon, CurrencyDollarIcon, FingerPrintIcon, GlobeAltIcon, LockClosedIcon, NewspaperIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

const benefits = [
  {
    name: 'Professonal Networking',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Publications and Education Activities',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: NewspaperIcon,
  },
  {
    name: 'Discounts on IEEE/Wiley Books',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: BanknotesIcon,
  },
  {
    name: 'Discount for Conferences Registration',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'GOOGLEAPPS@IEEE',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Scholarship for Students',
    description: '[https://mtt.org/students/]Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: AcademicCapIcon,
  },
]


function Description() {
  return (
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center justify-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE MTTS?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                inventore ut, corporis voluptate totam velit corrupti temporibus
                voluptatem atque id tenetur reprehenderit nam tempora reiciendis
                similique obcaecati, necessitatibus, adipisci nisi voluptates
                non nemo. Saepe perspiciatis voluptates neque aut quod quos?
                Assumenda possimus accusantium maiores obcaecati facilis
                quisquam, exercitationem culpa tempore?
              </p>
              <div className="grid place-items-center my-12">
                <img src="/images/logo/MTTS-01.png" alt="" />
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/membership"
                  className="rounded-md bg-sky-800 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                >
                  Join Us
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1200 878"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5b21b6" />
                  <stop offset={1} stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}


function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-700">Benefits</h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE Engineering in Medicine and Biology Society?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-justify">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-base font-semibold leading-7 text-sky-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}



function Conference() {
  return (
    <div className="mx-auto max-w-7xl px-6 mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto max-w-4xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
          <div>
            <div>
              {/* <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-sky-800 to-blue-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span> */}
            </div>
            <div className="mt-6">
              <div className="">
                <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl">
                  Conferences & Events
                </h1>
                <p className="mt-6 text-lg leading-8  text-justify text-gray-600">
                  The IEEE Computer Society sponsors more than 200 technical conferences and events each year, including the industry-oriented “Rock Stars” series, all over the world, aimed at research and industry professionals. The IEEE Computer Society annually sponsors a wide range of geographically diverse technical conferences, symposiums, and workshops dedicated to providing computing enthusiasts with innovative forums designed to facilitate the identification, creation, capture, and exchange of highly peer-reviewed scientific and technological knowledge that benefits our members, the profession, and humanity. Visit the link to check the upcoming conferences.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-sky-800 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                  >
                    Documentation
                  </a>
                  <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div className="py-6 lg:m-0 lg:h-full lg:px-0">
            <img
              className="w-full h-[80%] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto"
              src="/images/NBI_7122.JPG"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


function Publication() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl">
                  Publications
                </h1>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                  The IEEE Computer Society publications are peer-reviewed, indexed, and authored by technology thought leaders worldwide, and include 17 scholarly journals and 13 magazines featuring the latest technology trends. It also offers cutting-edge products such as the myComputer app (available for iOS or Android), that provide unprecedented user-driven access to its content, and the Digital Library with more than 550,000 articles and papers spanning the full spectrum of computer science and technology. Check out the journals and publications of IEEE Computer Society here.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-sky-800 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                  >
                    Documentation
                  </a>
                  <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-sky-800/10 ring-1 ring-sky-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-sky-800 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="/images/NBI_7180.jpg" alt="" />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}

function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-800">
      <div className="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Boost your productivity.</span>
          <span className="block text-sky-900">Start your journey today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-sky-100">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <a
          href="/membership"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-50 py-3 px-5 text-base font-medium text-sky-700 hover:bg-sky-100 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  );
}


export default function MTTS() {
  return (
    <>
      <Description />
      <Conference />
      <Publication />
      <Benefits> </Benefits>
      <JoinUs />
    </>
  )
}