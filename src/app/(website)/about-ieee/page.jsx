// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MissionAndVision from '@/components/MnV'
import MembershipBenefits from '@/components/membership benefits'
import JoinUs from '@/components/join us'
import WhyJoinIEEE from '@/components/whyjoinieee'

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
            fillOpacity=".15"
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
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className="relative py-12 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* <div className="bg-white"> */}
              <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="text-center">
                  <p className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">What is IEEE?</p>
                  <p className="mt-5 text-justify mx-auto text-xl text-gray-500">
                    IEEE (Institute of Electrical and Electronics Engineers) is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.  IEEE was established in 1963 with the goals of fostering technological innovation, developing standards, and advancing science, technology, and engineering. Through its widely recognized publications, conferences, technical standards, professional, and educational activities, IEEE and its members motivate a global community. It has grown into a global organization with more than 400,000 members that offers professional services in more than 190 countries and has conferences all over the world. IEEE also fosters innovation through its student competitions. The primary objective of IEEE is to promote technological innovation and excellence for the benefit of humanity.
                  </p>
                </div>
              </div>
            {/* </div> */}
            <div className="mt-16 flow-root sm:mt-24">
              <img
                src="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/homecarousel/hero/medicine-tech.jpg"
                alt=""
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


function Glance() {
  return (
    <div className="bg-white grid place-items-center py-24 my-12">
      <div className='relative max-w-7xl px-6'>
      <div className="h-56 rounded-t-lg lg:rounded-l-lg overflow-hidden shadow-lg bg-cyan-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-8 px-6 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
            <p className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">IEEE At A Glance</p>
          <p className="mt-6 text-justify text-lg text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur
            sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur
            deserunt voluptatibus.
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="grid grid-cols-4 gap-x-4 sm:gap-y-12 gap-y-8 place-items-center">
              <div className="flex flex-col">
                <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">Members</dt>
                <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">400k+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">Articles</dt>
                <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">5M+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">Societies</dt>
                <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">39</dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">Sections</dt>
                <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">340</dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">Conferenes</dt>
                <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">2000+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">Standards</dt>
                <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">1000+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">Projects</dt>
                <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">1000+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">Regions</dt>
                <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">10</dd>
              </div>
            </dl>
          </div>
        </div>
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
            <div></div>
            <div className="mt-6">
              <div className="">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Conference & Events
                </h1>
                <p className="mt-6 text-lg leading-8  text-justify text-gray-600">
                  The IEEE Computer Society sponsors more than 200 technical
                  conferences and events each year, including the
                  industry-oriented “Rock Stars” series, all over the world,
                  aimed at research and industry professionals. The IEEE
                  Computer Society annually sponsors a wide range of
                  geographically diverse technical conferences, symposiums, and
                  workshops dedicated to providing computing enthusiasts with
                  innovative forums designed to facilitate the identification,
                  creation, capture, and exchange of highly peer-reviewed
                  scientific and technological knowledge that benefits our
                  members, the profession, and humanity. Visit the link to check
                  the upcoming conferences.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-cyan-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
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
              src="https://www.phonexia.com/wp-content/uploads/top-11-call-center-conferences-2020.jpg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function Publication() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cyan-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
                  Publications
                </h1>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                  Digital Library with 840,000 Articles, Award-Winning Special Issues. Computer Society Digital Library (CSDL) and the IEEE Xplore® digital library. ComputingEdge Newsletter, Colloquium Abstracts, Tech News Blog, Resource Library. Short description of opportuinties and discounts.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-cyan-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
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
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-cyan-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-cyan-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="https://img.freepik.com/free-photo/business-women-signature-document_1388-90.jpg" alt="" />
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


export default function IEEE() {
  return (
    <>
      <Description />
      <MissionAndVision />
      <Glance />
      <Publication />
      <Conference />
      <WhyJoinIEEE />
      <MembershipBenefits />
      <JoinUs />
    </>
  )
}