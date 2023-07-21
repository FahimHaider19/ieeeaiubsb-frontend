import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

const posts = [
  {
    title: 'AIUBians On Erasmus',
    href: 'https://ieeeaiubsb.com/2022/12/23/aiubians-on-erasmus-2/',
    category: { name: 'Article', href: '#' },
    description:'On Saturday, December 10th, 2022, The IEEE AIUB Student Branch organized a webinar on “AIUBians on Erasmus.” This webinar’s objective was to offer variety of useful insights and recommendations on the Erasmus Mundus scholarship from AIUB alumni on various Erasmus programs.',
    date: 'Dec 10, 2022',
    datetime: '2020-03-16',
    imageUrl:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_8000/https://ieeeaiubsb.com/wp-content/uploads/2022/12/Erasmus-01.png'
  },
  {
    title: 'THE IEEE AIUB Student branch celebrated “IEEE Day 2022”',
    href: 'https://ieeeaiubsb.com/2022/10/11/the-ieee-aiub-student-branch-celebrated-ieee-day-2022/',
    category: { name: 'Video', href: '#' },
    description:'IEEE AIUB Student Branch organized an all-day long event celebrating “IEEE Day 2022” consisted of a workshop titled “A Medium Voltage Substation Design Maintaining Proper Standard,” organized by IEEE IAS Student Branch Chapter in collaboration with IEEE AIUB Student Branch, followed by a seminar.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1350/https://ieeeaiubsb.com/wp-content/uploads/2022/10/ieee_day_2022.jpg'
  },
  {
    title: 'Members’ Orientation 2022 – IEEE AIUB Student Branch',
    href: 'https://ieeeaiubsb.com/2022/08/07/seminer-onmembers-orientation-2022/',
    category: { name: 'Case Study', href: '#' },
    description:'The IEEE AIUB Student Branch has successfully organized the orientation ceremony for the new members of the IEEE. The event took place from 4:30 pm to 6:30 pm at the Multipurpose Hall, D building, AIUB Campus. The objective of this event was to welcome the new members, volunteers, and the new executive committee for the year 2022 of the IEEE AIUB Student Branch',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://ieeeaiubsb.com/wp-content/uploads/2022/10/Member-orientation-2022.png'
  },
  {
    title: 'AIUBians On Erasmus',
    href: 'https://ieeeaiubsb.com/2022/12/23/aiubians-on-erasmus-2/',
    category: { name: 'Article', href: '#' },
    description: 'On Saturday, December 10th, 2022, The IEEE AIUB Student Branch organized a webinar on “AIUBians on Erasmus.” This webinar’s objective was to offer variety of useful insights and recommendations on the Erasmus Mundus scholarship from AIUB alumni on various Erasmus programs.',
    date: 'Dec 10, 2022',
    datetime: '2020-03-16',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_8000/https://ieeeaiubsb.com/wp-content/uploads/2022/12/Erasmus-01.png'
  },
  {
    title: 'THE IEEE AIUB Student branch celebrated “IEEE Day 2022”',
    href: 'https://ieeeaiubsb.com/2022/10/11/the-ieee-aiub-student-branch-celebrated-ieee-day-2022/',
    category: { name: 'Video', href: '#' },
    description: 'IEEE AIUB Student Branch organized an all-day long event celebrating “IEEE Day 2022” consisted of a workshop titled “A Medium Voltage Substation Design Maintaining Proper Standard,” organized by IEEE IAS Student Branch Chapter in collaboration with IEEE AIUB Student Branch, followed by a seminar.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1350/https://ieeeaiubsb.com/wp-content/uploads/2022/10/ieee_day_2022.jpg'
  },
  {
    title: 'Members’ Orientation 2022 – IEEE AIUB Student Branch',
    href: 'https://ieeeaiubsb.com/2022/08/07/seminer-onmembers-orientation-2022/',
    category: { name: 'Case Study', href: '#' },
    description: 'The IEEE AIUB Student Branch has successfully organized the orientation ceremony for the new members of the IEEE. The event took place from 4:30 pm to 6:30 pm at the Multipurpose Hall, D building, AIUB Campus. The objective of this event was to welcome the new members, volunteers, and the new executive committee for the year 2022 of the IEEE AIUB Student Branch',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://ieeeaiubsb.com/wp-content/uploads/2022/10/Member-orientation-2022.png'
  },
]

export default function OurEvents() {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 ">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Events</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-md md:max-w-none grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-64 w-full object-fill" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {post.category.name}
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  </a>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <nav className="flex items-center justify-between pt-8 sm:pt-12 border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
                <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                Previous
                </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
                <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                1
                </a>
                {/* Current: "border-blue-500 text-blue-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                <a
                href="#"
                className="inline-flex items-center border-t-2 border-blue-500 px-4 pt-4 text-sm font-medium text-blue-600"
                aria-current="page"
                >
                2
                </a>
                <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                3
                </a>
                <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                ...
                </span>
                <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                8
                </a>
                <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                9
                </a>
                <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                10
                </a>
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <a
                href="#"
                className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                Next
                <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </a>
            </div>
        </nav>
      </div>
    </div>
  )
}
