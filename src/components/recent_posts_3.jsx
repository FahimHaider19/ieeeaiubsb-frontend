const posts = [
  
  
  {
    id: 82,
    title: ` Seminar on ‘A Road to Erasmus Mundus Joint Masters (EMJM) and Erasmus Mundus Scholarship’`,
    
    imageUrl: "/images/event/erasum-mundus-banner.jpg",
    date: "October 22,2023",
    datetime: "2023/10/22", 
      
    href: "/images/event/erasum-mundus-banner.jpg",
    category: {  href: "#" },
    description:
      "On Sunday, 22nd October 2023, the IEEE AIUB Student Branch organized a webinar titled “A Road to Erasmus Mundus Joint Masters (EMJM) and Erasmus Mundus Scholarship”.",
    
     

  },
  {
    id: 81,
    title: `Celebration of IEEE Day 2023`,
    description:
    `On Tuesday, 10th October 2023, the IEEE AIUB Student Branch organized an all-day long event celebrating “IEEE Day 2023”.`,
  
    
    imageUrl: "/images/event/ieee-day-2023.jpg",
    href: "/images/event/ieee-day-2023.jpg",
    date: "October 10,2023",
    datetime: "2023/10/10",
    category: ``,
  },{
    id: 80,
    title: `Seminar on ‘A Rapid & Low-Cost Multifrequency Electrical Impedance Tomography System for Precision Agriculture’`,
    
    imageUrl: "/images/event/tomography.jpg",
    href: "/images/event/tomography.jpg",
    description:
    `On Wednesday, September 27th, 2023, The IEEE AIUB Student Branch, successfully organized a seminar titled “A Rapid and Low-Cost Multifrequency Electrical Impedance Tomography Data Acquisition System for Precision Agriculture”..`,
    date: "September 27,2023",
    datetime: "2023/9/17",
    category: ``,
  }
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
