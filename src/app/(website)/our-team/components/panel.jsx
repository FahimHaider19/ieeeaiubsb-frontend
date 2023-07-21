const panel = [
  {

  }
]


export default function Panel(props) {
  return (
    <>
      <p className="mt-1 text-4xl text-center font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">Our Team</p>
      <div className="mt-6 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-4 lg:mt-8">
        <a href="#" className="grid grid-cols-1 justify-items-center max-w-sm h-full w-full  p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <img className='h-32 text-center' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/ieee_logo_icon_169992.png" alt="" />
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 hover:text-gray-900">Executive Committee {props.year}</h5>
        </a>
        <a href="#" className="grid grid-cols-1 justify-items-center max-w-sm h-full w-full  p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <img className='h-32 text-center' src="https://static-00.iconduck.com/assets.00/ieee-icon-2048x2048-5s8z25o1.png" alt="" />
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 hover:text-gray-900">Volunteers {props.year}</h5>
        </a>
        <a href="#" className="grid grid-cols-1 justify-items-center max-w-sm h-full w-full  p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <img className='h-32 text-center' src="https://ieeecs-media.computer.org/wp-media/2018/04/27230619/cropped-cs-favicon-512x512.png" alt="" />
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 hover:text-gray-900">CS Executive Committee {props.year}</h5>
        </a>
        <a href="#" className="grid grid-cols-1 justify-items-center max-w-sm h-full w-full  p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <img className='h-32 text-center' src="https://blockchain.ieee.org/images/files/images/ieee-industry-applications-society.png" alt="" />
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 hover:text-gray-900">IAS Committee {props.year}</h5>
        </a>
        <a href="#" className="grid grid-cols-1 justify-items-center max-w-sm h-full w-full  p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <img className='h-32 text-center' src="https://www.embs.org/wp-content/uploads/2023/05/ieee-embs-notag-r-logo2x.png" alt="" />
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 hover:text-gray-900">EMBS Committee {props.year}</h5>
        </a>
        <a href="#" className="grid grid-cols-1 justify-items-center max-w-sm h-full w-full  p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <img className='h-32 text-center' src="https://ieee-risingstars.org/wp-content/uploads/sites/1/2017/11/mtts-logo-300x150-300x150.png" alt="" />
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 hover:text-gray-900">MTTS Committee {props.year}</h5>
        </a>
        <a href="#" className="grid grid-cols-1 justify-items-center max-w-sm h-full w-full  p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <img className='h-32 text-center' src="https://ieee.uwu.ac.lk/wie/wp-content/uploads/sites/2/2022/12/cropped-Untitled-design1.png" alt="" />
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 hover:text-gray-900">WIE Executive Committee {props.year}</h5>
        </a>
        <a href="#prev" className="text-base font-semibold leading-7 text-cyan-600 grid place-items-center">
          <div>View more <span aria-hidden="true">→</span></div>
        </a>
      </div>
    </>
  )
}
