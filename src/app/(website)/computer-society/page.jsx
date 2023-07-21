import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'

// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Access the Latest Research',
    description:
      'Access to Computer magazine(12x/year). 18 complimentary articles per membership year. Save $350 on publishing papers with your IEEE Computer Society Membership.Discounts on Magazine Subscriptions - Discounts on Magazine Subscriptions, IEEE Computer Society Digital Library. Discounts on Magazine Subscriptions',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Network With Your Peers',
    description:
      'Join + 50k professionals in computing and participate in professional chapters, share your research, and collaborate on the latest trends. Young Professionals, IEEE Diversity and Inclusivity (DEI), IEEE Diversity and Inclusivity (DEI). Short desccription of IEEE Collabratec',
    icon: LockClosedIcon,
  },
  {
    name: 'Get Recognized',
    description: 'Join + 50k professionals in computing and participate in professional chapters. Student Scholarships and Awards(US $40,000 in scholarships plus $1,000s in travel grants), International Awards, Achieve IEEE Fellow Status; Chapter, Region, and Section Activities. Technical Community Leadership',
    icon: ArrowPathIcon,
  },
  {
    name: 'Network With Your Peers',
    description: 'Career Center, Professional Education Courses, Early Career Webinars, Global Startup Accelerator Index',
    icon: FingerPrintIcon,
  },
]

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function Description() {
  return (
    <div className="relative -z-10 isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C36721" />
              <stop offset={1} stopColor="#FFCC33" />
            </linearGradient>
          </defs>
        </svg>
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
              <stop stopColor="#C36721" />
              <stop offset={1} stopColor="#FFCC33" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE CS?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                The IEEE Computer Society (CS) sets the bar for the education and participation that enables ongoing worldwide technological growth by involving computer engineers, scientists, academics, and industry professionals from all fields of computing. The IEEE Computer Society, which has more than 375,000 members, is a dependable source of knowledge, networking opportunities, and career guidance for a global community of technology leaders. IEEE CS empowers, shapes, and guides the future of not only its members, but the greater industry, creating new opportunities to better serve our world. This is done through conferences, publications, and programs, as well as by bringing computer science and engineering leaders together at every stage of their career for dialogue, debate, and collaboration.
              </p>
              <div className='grid place-items-center my-12'>
                <img src="https://ieeeaiubsb.com/wp-content/uploads/2020/09/CS-2-600x325.png" alt="" />
              </div>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-orange-500 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Join Us
                </a>
                <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


function Benefits() {
  return (
    <div className="bg-white py-12 sm:mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-amber-700">Benefits</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
             Why join IEEE Computer Society?
          </p>
          <p className="mt-8 text-lg text-justify leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus quisquam et delectus nostrum nam atque numquam suscipit nesciunt eligendi sapiente vero accusantium explicabo laudantium quo, hic dolorem aperiam cupiditate!

          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl mt-18">
          <dl className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:max-w-none lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
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
                  </div>
                  <div className="mt-6">
                    <div className="">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-5xl">
                        Conferences & Events
                        </h1>
                          <p className="mt-6 text-lg leading-8  text-justify text-gray-600">
                            The IEEE Computer Society sponsors more than 200 technical conferences and events each year, including the industry-oriented “Rock Stars” series, all over the world, aimed at research and industry professionals. The IEEE Computer Society annually sponsors a wide range of geographically diverse technical conferences, symposiums, and workshops dedicated to providing computing enthusiasts with innovative forums designed to facilitate the identification, creation, capture, and exchange of highly peer-reviewed scientific and technological knowledge that benefits our members, the profession, and humanity. Visit the link to check the upcoming conferences.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
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
                    src="/images/_NBI2722.JPG"
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
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-amber-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-5xl">
                  Publications
                </h1>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                  Digital Library with 840,000 Articles, Award-Winning Special Issues. Computer Society Digital Library (CSDL) and the IEEE Xplore® digital library. ComputingEdge Newsletter, Colloquium Abstracts, Tech News Blog, Resource Library. Short description of opportuinties and discounts. 
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
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
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-amber-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-amber-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="/images/NBI_7091.JPG" alt="" />
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


const educationFeatures = [
  {
    name: 'Bodies of Knowledge',
    description: '[SWEBoK, SEBoK]. Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
  },
  {
    name: 'Online Courses', 
    description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
  {
    name: 'Certifications',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  },
  {
    name: 'Webinars',
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  },
  { name: 'Conferences', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
  { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
  {
    name: 'Podcasts',
    description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
  },
  {
    name: 'Digital Library',
    description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  },
]

function Education() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-amber-600">Everything you need</h2>
            <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
              Education
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {educationFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute top-1 left-0 h-5 w-5 text-amber-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
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
    <div className="bg-gradient-to-r from-amber-600 to-yellow-400">
      <div className="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Boost your productivity.</span>
          <span className="block text-amber-900">Start your journey today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-amber-100">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-amber-50 py-3 px-5 text-base font-medium text-amber-700 hover:bg-amber-100 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  )
}


export default function CS() {
  return (
    <>
      <Description />
      <Conference />
      <Publication />
      <Education />
      <Benefits />
      <JoinUs />
    </>
  )
}