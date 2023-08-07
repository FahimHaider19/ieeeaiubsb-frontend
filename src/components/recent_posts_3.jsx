const posts = [
  {
    id: 74,
    title: 'Seminar on ‘Terahertz and Novel Antenna Design Techniques for Next Generation 6G Technologies’',
    href: '/images/event/terahertz-banner.png',
    category: { name: 'Seminar', href: '#' },
    description:'On Saturday, December 10th, 2022, The IEEE AIUB Student Branch organized a webinar on “AIUBians on Erasmus.” This webinar’s objective was to offer variety of useful insights and recommendations on the Erasmus Mundus scholarship from AIUB alumni on various Erasmus programs.',
    date: "July 4,2023",
    datetime: "2023/6/4",
    imageUrl:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_8000/https://ieeeaiubsb.com/wp-content/uploads/2022/12/Erasmus-01.png'
  },
  {
    id: 73,
    title: 'IEEE AIUB Student Branch WIE Affinity Group Successfully Celebrated “WIE Day”',
    href: '/images/event/wie-day-23.jpg',
    category: { name: 'WIE', href: '#' },
    description:'IEEE AIUB Student Branch organized an all-day long event celebrating “IEEE Day 2022” consisted of a workshop titled “A Medium Voltage Substation Design Maintaining Proper Standard,” organized by IEEE IAS Student Branch Chapter in collaboration with IEEE AIUB Student Branch, followed by a seminar.',
    date: "June 18,2023",
    datetime: "2023/5/18",
    imageUrl:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1350/https://ieeeaiubsb.com/wp-content/uploads/2022/10/ieee_day_2022.jpg'
  },
  {
    id: 72,
    title: 'Seminar on “EEG Signal Processing & Application to the Neurofeedback: Operant Conditioning of Brain and Behaviors”.',
    href: '/images/event/eeg-signal.jpg',
    category: { name: 'Seminar', href: '#' },
    description:'The IEEE AIUB Student Branch has successfully organized the orientation ceremony for the new members of the IEEE. The event took place from 4:30 pm to 6:30 pm at the Multipurpose Hall, D building, AIUB Campus. The objective of this event was to welcome the new members, volunteers, and the new executive committee for the year 2022 of the IEEE AIUB Student Branch',
    date: "June 22,2023",
    datetime: "2023/5/22",
    imageUrl:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://ieeeaiubsb.com/wp-content/uploads/2022/10/Member-orientation-2022.png'
  },
]

export default function RecentPosts3() {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">Recent Posts</h1>
          {/* <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p> */}
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <a key={post.title} href={"/post/" + post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-64 w-full object-fill" src={post.href} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    {post.category.name}
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl text-justify font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-justify text-base text-gray-500">{post.description}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">
                  {post.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
