const posts = [
   
  {
    id: 83,
    title: `Webinar on “AIUBIANS on ERASMUS”`,
    imageUrl: "/images/erasmus-23.jpg",
    date: "November 19, 2023",
    datetime: "2023/11/19", 
    href: "/images/erasmus-23.jpg",
    category: {  href: "#" },
    description:
      "On Sunday, November 19, 2023, the IEEE AIUB Student Branch successfully organized a webinar titled “AIUBians on Erasmus.” The webinar aimed to provide an informative session for individuals passionate about availing themselves of the ERASMUS MUNDUS scholarship. The speakers were AIUB alumni who had successfully received this prestigious scholarship. They covered the fundamentals and offered helpful guidance on various Erasmus programs.",
  }
  ,
  {
    id: 84,
    title: `The IEEE AIUB SB successfully organized International Student Led-Conference 2023`,
    imageUrl: "/images/student-led.jpg",
    date: "December 13,2023",
    datetime: "2023/12/13", 
    href: "/images/student-led.jpg",
    category: {  href: "#" },
    description:
      "IEEE Bangladesh Section, IEEE AIUB Student Branch, and IEEE NSU Student Branch jointly organized the International Student-Led Conference 2023. The conference was held at the Long Beach Hotel in Cox's Bazar, Bangladesh as a co-located conference of the 26th International Conference on Computer and Information Technology (ICCIT) and the 10th International Conference on Power Systems (ICPS) on 13th December 2023.",
 
  }
  ,
  {
    id: 85,
    title: `Webinar on “Green Computing for AI: Compact and Energy-Efficient Compute-in-Memory”`,
    imageUrl: "/images/green-computing.jpg",
    date: "January 22, 2024",
    datetime: "2024/01/22", 
    href: "/images/green-computing.jpg",
    category: {  href: "#" },
    description:
      "On Monday, 22nd January 2024, the IEEE AIUB Student Branch in collaboration with the IEEE Industry Applications Society AIUB Student Branch Chapter and IEEE Computer Society AIUB Student Branch Chapter successfully hosted a webinar titled “Green Computing for AI: Compact and Energy-Efficient Compute-in-Memory”. The event emphasized the importance of integrating energy-efficient and compact compute-in-memory solutions into AI systems for high-performance and environmentally conscious AI applications.",
 
  }
  // ,
  // {
  //   id: 86,
  //   title: `Seminar on “Emerging Research Highlights in Power & Energy”`,
  //   imageUrl: "/images/power-energy.jpg",
  //   date: "January 31, 2024",
  //   datetime: "2024/1/31",

  //   href: "/images/power-energy.jpg",
  //   category: {  href: "#" },
  //   description:
  //     "On Wednesday, 31st January 2024, the Department of EEE, Faculty of Engineering, AIUB, in collaboration with IEEE AIUB Student Branch successfully organized a seminar on “Emerging Research Highlights in Power & Energy”. The main goal of this session was to provide insights into the current developments in the power and energy sector while also motivating participants to engage in further research on this topic, particularly focusing on renewable energy.    ",
 
  // }
  
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
                  src={post.href}
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
