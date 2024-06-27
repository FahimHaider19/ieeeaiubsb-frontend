const posts = [
  {
    id: 88,
    title: `Scientific visit to Secondary Standard Dosimetry Laboratory (SSDL) funded by IEEE EMBS`,
    imageUrl: "/images/ssdl-visit.jpg",
    date: "February 28, 2024",
    datetime: "2024/02/28",
    category: ``,
    description: `On Wednesday, 28th February 2024, the IEEE AIUB Student Branch successfully organized a scientific visit funded by IEEE EMBS. The visit aimed to provide participants with hands-on experience in dosimetry and radiation protection. The participants had the opportunity to learn about the calibration of radiation measurement devices and the importance of accurate dosimetry in medical and industrial applications.`,
  },
  {
    id: 87,
    title: `Seminar on “Beyond Boundaries: Electrochemical Sensors Shaping Tomorrow's World"`,
    imageUrl: "/images/electrochemical-sensor.jpg",
    date: "February 7, 2024",
    datetime: "2024/02/07",
    category: ``,
    description: `On Wednesday, 7th February 2024, the IEEE AIUB Student Branch successfully organized this seminar. The seminar aimed to provide participants with an in-depth understanding of the significance of electrochemical sensors in shaping the future of various industries. The session featured expert speakers who shared their insights on the latest advancements in electrochemical sensors and their applications in different fields.`,
  },
  {
    id: 86,
    title: `Seminar on “Emerging Research Highlights in Power & Energy”`,
    imageUrl: "/images/power-energy.jpg",
    date: "January 31, 2024",
    datetime: "2024/1/31",
    category: ``,
    description: `On Wednesday, 31st January 2024, the Department of EEE,Faculty of Engineering, AIUB, in collaboration with IEEE AIUB Student Branch successfully organized a seminar on “Emerging Research Highlights in Power & Energy”. The main goal of this session was to provide insights into the current developments in the power and energy sector while also motivating participants to engage in further research on this topic, particularly focusing on renewable energy.`,
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
