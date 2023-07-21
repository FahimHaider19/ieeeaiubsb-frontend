import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Enterprise',
    href: 'https://liberconference.eu/wp-content/uploads/2019/04/IEEE-XploreDigitalLibrary.jpg',
    description: 'All the basics for starting a new business',
  },
  {
    name: 'Enterprise',
    href: 'https://media.licdn.com/dms/image/C4D1BAQF-_PZj_7Fn-w/company-background_10000/0/1612998898844?e=1687096800&v=beta&t=8RTTq-vWAFBHLSKCvdrV-wO-vR1vRB5ayyfhQwo7mKk',
    description: 'All the basics for starting a new business',
  },
  {
    name: 'Enterprise',
    href: 'https://r5.ieee.org/houston/wp-content/uploads/sites/32/2015/11/IEEE-JobSites2.png',
    description: 'All the basics for starting a new business',
  },
  {
    name: 'Enterprise',
    href: 'https://www.ieeemansb.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fresumelab.4c039322.png&w=750&q=75',
    description: 'All the basics for starting a new business',
  },
  {
    name: 'Enterprise',
    href: 'https://www.ieeemansb.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollabratec.22e9682c.png&w=640&q=75',
    description: 'All the basics for starting a new business',
  },
  {
    name: 'Enterprise',
    href: 'https://www.ieeemansb.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxtreme.75c4dff7.png&w=750&q=75',
    description: 'All the basics for starting a new business',
  },
  {
    name: 'Enterprise',
    href: 'https://www.ieeemansb.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspectrum.e1b62874.png&w=640&q=75',
    description: 'All the basics for starting a new business',
  },
  {
    name: 'Enterprise',
    href: 'https://ieeemansb.org/static/img/membership/ieee%40gapps.png',
    description: 'All the basics for starting a new business',
  }
]


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
            <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-gray-200">
              <div className="p-8 sm:p-10">
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
