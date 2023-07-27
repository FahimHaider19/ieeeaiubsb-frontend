function Description() {
  return (
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center justify-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                IEEE Reion-10
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                IEEE Region 10, also known as the Asia Pacific Region,
                encompasses a vast network of 60 Sections, 6 Councils, 42
                Sub-sections, 697 Chapters, over 60 Affinity Groups, and 1600
                Student Branches. This region spans a significant geographical
                area, stretching from South Korea and Japan in the northeast to
                New Zealand in the south, and Pakistan in the west. With a
                membership exceeding 135,000+, IEEE Region 10 stands as one of
                the largest regions within the organization. For further
                details, please visit https://www.ieeer10.org/
              </p>
              <div className="grid place-items-center my-12">
                <img src="/images/logo/R10-01.png" alt="" />
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/membership"
                  className="rounded-md bg-cyan-700 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-900"
                >
                  Join Us
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
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
                  <stop stopColor="#6b21a8" />
                  <stop offset={1} stopColor="#86198f" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

function History() {
  return (
    <div className="overflow-hidden bg-white py-16 px-6 lg:px-8 xl:py-36">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            {/* <h2 className="font-semibold leading-6 text-cyan-600">Transactions</h2 */}
            <p className="mt-1 text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
              History
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-lg prose-cyan text-gray-500 lg:max-w-none">
                <p className="text-justify">
                  The IEEE is divided into 10 geographical regions, each with
                  its own unique focus and membership base. Region 10, also
                  known as the Asia Pacific Region, is the largest region in
                  terms of membership count. As of 2019, Region 10 had over
                  135,000 members, making it a significant and influential force
                  within the IEEE community. The primary aim of the IEEE Regions
                  is to foster global technological advancement for the
                  betterment of human life. Region 10 is committed to this goal,
                  and its members are actively involved in a wide range of
                  technological initiatives, from developing new products and
                  services to improving the lives of people around the world.
                  Region 10 is also home to a number of IEEE societies, which
                  provide specialized technical support and networking
                  opportunities to members with similar interests. These
                  societies play a vital role in the growth and development of
                  the region's technology community.
                </p>
              </div>
              <div className="prose prose-lg prose-cyan mt-6 text-gray-500 lg:mt-0">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  molestiae consectetur tenetur nulla quae nemo, dicta neque
                  tempora. Autem vitae soluta quisquam dolor delectus iste
                  suscipit officiis, impedit dicta blanditiis accusamus.
                  Distinctio sequi modi expedita eius, incidunt nam beatae
                  libero ab, cumque aliquid nihil eos alias rem est voluptatibus
                  numquam nobis, molestiae officiis? Ea nobis exercitationem,
                  natus cum magnam est voluptas optio laudantium aliquam quo
                  repellat, eum quaerat ut saepe neque libero alias, veritatis
                  aut ratione culpa in suscipit. Totam debitis possimus cum.
                  Pariatur voluptatibus delectus nemo adipisci recusandae omnis
                  aut facere harum! Alias molestias vero dolore. Repellat animi
                  error debitis! Quas perferendis, optio quod ut fugit voluptas
                  illum, aliquam eos sed numquam libero culpa tenetur totam
                  asperiores aperiam enim incidunt distinctio qui velit facere?
                  Commodi quisquam, molestias odit at temporibus molestiae nisi,
                  omnis, earum iste perspiciatis odio? Deserunt rem commodi,
                  ratione ab earum eius doloremque officia necessitatibus iusto
                  facilis.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-8 w-full grid place-items-center">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 text-base font-medium text-white hover:bg-cyan-700"
            >
              The Constitution, Rules & By-Laws
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default function IEEER10() {
  return (
    <>
      <Description />
      <History />
    </>
  )
}