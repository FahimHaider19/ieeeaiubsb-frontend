import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/outline'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

const benefits = [
  {
    name: 'Networking opportunities',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Newsletters and magazines',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Awards and recognition',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Discounted registration',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Travel grants',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Scholarship for Students',
    description: '[https://mtt.org/students/]Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]
/* This Description requires Tailwind CSS v3.0+ */

function Description() {
  return (
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center justify-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE WIE?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore ut, corporis voluptate totam velit corrupti temporibus voluptatem atque id tenetur reprehenderit nam tempora reiciendis similique obcaecati, necessitatibus, adipisci nisi voluptates non nemo. Saepe perspiciatis voluptates neque aut quod quos? Assumenda possimus accusantium maiores obcaecati facilis quisquam, exercitationem culpa tempore?
              </p>
              <div className='grid place-items-center my-12'>
                <img src="https://ieeeaiubsb.com/wp-content/uploads/2020/09/wie-new-01-400x400.png" alt="" />
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-fuchsia-700 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-fuchsia-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-900"
                >
                  Join Us
                </a>
                <a href="#" className="text-base font-semibold leading-7 text-gray-900">
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
                  <stop stopColor="#6b21a8" />
                  <stop offset={1} stopColor="#86198f" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}


const strives = [
  {
    name: 'Newsletter',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Magazine.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Manga Contest',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

function Conference() {
  return (
    <div className="mx-auto max-w-7xl px-6 mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto max-w-4xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl">
                IEEE WIE Strives to???????
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {strives.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-fuchsia-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div className="py-6 lg:m-0 lg:h-full lg:px-0">
            <img
              className="w-full h-[80%] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto"
              src="/images/SPAVe 6.0-695_cropped.jpg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


const publications = [
  {
    name: 'Newsletter',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Magazine.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Manga Contest',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

function Publication() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-fuchsia-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl py-2 max-w-fit font-bold tracking-tight bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl">
                Publications & Digital Media
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {publications.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-fuchsia-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-fuchsia-900/10 ring-1 ring-fuchsia-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-fuchsia-900 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-fuchsia-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="/images/NBI_1627.JPG" alt="" />
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

const metrics = [
  { id: 1, stat: '30K+', emphasis: 'Members', rest: 'use laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '100+', emphasis: 'Countries', rest: 'lacus nibh integer quis.' },
  { id: 2, stat: '214', emphasis: 'Sections', rest: 'lacus nibh integer quis.' },
  { id: 3, stat: '958', emphasis: 'Student Branches', rest: 'laoreet amet lacus nibh integer quis.' },
]

function Stats() {
  return (
    <div className="bg-fuchsia-900 grid place-items-center">
      <div className='relative max-w-7xl'>
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/images/SPAVe 6.0-169_cropped.jpg"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 h-32 bg-gradient-to-b from-fuchsia-900 right-0 xl:h-full xl:w-32 xl:bg-gradient-to-l"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-base font-semibold text-white">Valuable Metrics</h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white">
            IEEE WIE by the Numbers
          </p>
          <p className="mt-5 text-lg text-fuchsia-300">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
            feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
            nibh integer quis. Eu vulputate diam sit tellus quis at.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}


function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-fuchsia-700">Benefits</h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE Women in Engineering?
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
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-base font-semibold leading-7 text-fuchsia-600">
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


function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-900">
      <div className="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Boost your productivity.</span>
          <span className="block text-fuchsia-900">Start your journey today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-fuchsia-100">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-fuchsia-50 py-3 px-5 text-base font-medium text-fuchsia-700 hover:bg-fuchsia-200 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  )
}


export default function WIE() {
  return (
    <>
      <Description />
      <Conference />
      <Publication />
      <Stats />
      <Benefits> </Benefits>
      <JoinUs />
    </>
  )
}