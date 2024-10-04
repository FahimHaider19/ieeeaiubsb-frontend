const posts = [
  {
    id: 90,
    title: `Webinar on “Data-Driven Electric Vehicle Customer Profiling”`,
    imageUrl: "/images/data-driven-electric-vehicle.jpg",
    date: "February 12, 2024",
    datetime: "2024/02/12",
    category: ``,
    description: `Electric vehicles (EVs) are revolutionizing the automotive industry with their sustainable and efficient mode of transportation. As the demand for EVs continues to grow, understanding the preferences and behaviors of electric vehicle customers becomes crucial for manufacturers, policymakers, and other stakeholders. In this context, the IEEE AIUB Student Branch is organizing a webinar titled “Data-Driven Electric Vehicle Customer Profiling. ”`,
  },
  {
    id: 91,
    title: `Seminar titled “IEEE USER-AWARENESS SESSION-2024”`,
    imageUrl: "/images/awareness-session-2024.jpg",
    date: "May 27, 2024",
    datetime: "2024/05/27",
    category: ``,
    description: `On Monday, 27th May 2024, American International University Bangladesh successfully hosted an informative seminar titled “IEEE USER-AWARENESS SESSION-2024”. The goal of this seminar was to inform attendees on IEEE resources and how to use them for research and career advancement. The event was inaugurated with a warm welcoming elocution of Prof. Dr. ABM Siddique Hossain, Dean, Faculty of Engineering, AIUB. `,
  },
  {
    id: 92,
    title: `IEEE Student Professional Awareness Venture (SPAVe) 7.0`,
    imageUrl: "/images/Spave7.0.jpg",
    date: "June 06, 2024",
    datetime: "2024/06/06",
    category: ``,
    description: `On Thursday, June 6, 2024, the IEEE AIUB Student Branch successfully organized the 7th rendition of the IEEE USA & SPAA branded flagship event, the IEEE Student Professional Awareness Venture 7.0 (SPAVe 7.0) at American International University-Bangladesh. The venture was greatly supported by American International University-Bangladesh and technically supported by IEEE, IEEE Bangladesh Section and IEEE Young Professionals Bangladesh. `,
  },
];

export default function RecentPosts3() {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
            Recent Posts
          </h1>
          {/* <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p> */}
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href={"/post/" + post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-64 w-full object-fill"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    {post.category.name}
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl text-justify font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-justify text-base text-gray-500">
                      {post.description}
                    </p>
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
  );
}
