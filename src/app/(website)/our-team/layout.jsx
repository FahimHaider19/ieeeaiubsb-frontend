const committees = [
  { year: 2022 },
  { year: 2021 },
  { year: 2020 },
  { year: 2019 },
  { year: 2018 },
  { year: 2017 },
  { year: 2016 },
  { year: 2015 },
  { year: 2014 },
  { year: 2013 },
  // More committees...
]
export default function OurTeamLayout({ children }) {
  return (
    <div className="bg-white" id="prev">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
        { children }
      </div>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
        <p className="mt-1 text-4xl text-center font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
          Previous Committees
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-4 md:grid-cols-4 lg:mt-8">
          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"> */}
          {committees.map((committee) => (
            <div
              className="relative w-full flex items-center justify-center space-x-3 overflow-hidden rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-2xl font-bold text-gray-600">{committee.year}</p>
                </a>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}