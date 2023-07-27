import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: "IEEE Xplore Digital Library",
    href: "/images/logo/ieeexplore-01.png",
    description: "All the basics for starting a new business",
  },
  {
    name: "IEEE Potentials",
    href: "/images/logo/ieeepotentials-02.png",
    description: "All the basics for starting a new business",
  },
  {
    name: "IEEE Job Site",
    href: "/images/logo/ieeejobsite-01.png",
    description: "All the basics for starting a new business",
  },
  {
    name: "IEEE Resume Lab",
    href: "/images/logo/ieeeresumelab-01.png",
    description: "All the basics for starting a new business",
  },
  {
    name: "IEEE Collabratec",
    href: "/images/logo/ieeecollabratec-01.png",
    description: "All the basics for starting a new business",
  },
  {
    name: "IEEE Xtreme",
    href: "/images/logo/ieeextreme-01.png",
    description: "All the basics for starting a new business",
  },
  {
    name: "IEEE Spectrum",
    href: "/images/logo/ieeespectrum-01.png",
    description: "All the basics for starting a new business",
  },
  {
    name: "IEEE Google Apps",
    href: "/images/logo/ieeegoogleapps-01.png",
    description: "All the basics for starting a new business",
  },
];


export default function MembershipBenefits() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
        <div className="grid place-items-center">
          {/* <div className='grid place-items-center'></div> */}
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Membership Benefits
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            // eslint-disable-next-line react/jsx-key
            <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-gray-200">
              <div className="px-8 pt-8 pb-3 sm:pt-10 grid place-items-center ">
                {/* <h3 className="text-lg font-semibold leading-8 tracking-tight text-cyan-600" id="tier-hobby">Hobby</h3> */}
                <img src={tier.href} alt="" />
                {/* <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">A better workflow</p> */}
              </div>
              <div className="flex flex-1 flex-col p-2">
                <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                  <ul role="list" className="space-y-6">

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-cyan-600" x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600">Pariatur quod similique</p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-cyan-600" x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600">Sapiente libero doloribus modi nostrum</p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-cyan-600" x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600">Vel ipsa esse repudiandae excepturi</p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-cyan-600" x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600">Itaque cupiditate adipisci quibusdam</p>
                    </li>

                  </ul>
                  <div className="mt-8 grid place-items-center">
                    <a href={'#'} className="text-base font-semibold leading-7 text-cyan-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
