'use client'
import React, {useState} from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";


const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id, width, height) =>
	`https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos ={
	"2023":[
		{
			id: "ts1zXzsD7xc",
			width: 1080,
			height: 1620
		},
		{
			id: "F_r83HEzsXI",
			width: 1080,
			height: 1426
		},
		{
			id: "m82uh_vamhg",
			width: 1080,
			height: 1440
		},
		{
			id: "br-Xdb9KE0Q",
			width: 1080,
			height: 716
		},
		{
			id: "6mze64HRU2Q",
			width: 1080,
			height: 1620
		},
		{
			id: "7ENqG6Gmch0",
			width: 1080,
			height: 718
		},
		{
			id: "KMn4VEeEPR8",
			width: 1080,
			height: 718
		},
		{
			id: "uQDRDqpYJHI",
			width: 1080,
			height: 1620
		},
		{
			id: "AD6rn3vqG7o",
			width: 1080,
			height: 1620
		},
		{
			id: "SYx3UCHZJlo",
			width: 1080,
			height: 720
		},
		{
			id: "qH-JPcFXUTY",
			width: 1080,
			height: 1620
		},
		{
			id: "NLUkAA-nDdE",
			width: 1080,
			height: 1441
		},
		{
			id: "55OH6wnJqXo",
			width: 1080,
			height: 1587
		},
		{
			id: "CSs8aiN_LkI",
			width: 1080,
			height: 1626
		},
		{
			id: "dZ4Ylj91F2M",
			width: 1080,
			height: 1350
		},
		{
			id: "35muyqODIHA",
			width: 1080,
			height: 1620
		},
		{
			id: "xarhNpLSHTk",
			width: 1080,
			height: 720
		},
		{
			id: "oR0uERTVyD0",
			width: 1080,
			height: 1922
		},
		{
			id: "h0AnGGgseio",
			width: 1080,
			height: 1623
		},
		{
			id: "ImHttRUM2jE",
			width: 1080,
			height: 1613
		},
		{
			id: "TkGZFU2t9gc",
			width: 1080,
			height: 720
		},
		{
			id: "P93ijX1URuU",
			width: 1080,
			height: 1441
		},
		{
			id: "MGKGuMP9nLY",
			width: 1080,
			height: 1350
		},
		{
			id: "1VYdx37vOGQ",
			width: 1080,
			height: 720
		},
		{
			id: "9kY6iayVGIk",
			width: 1080,
			height: 1620
		},
	],
	"2022":[
		{
			id: "7zT-vbOFoSM",
			width: 1080,
			height: 1309
		},
		{
			id: "K8e4DtETWpg",
			width: 1080,
			height: 718
		},
		{
			id: "HRVpJIkZP4o",
			width: 1080,
			height: 1923
		},
		{
			id: "qY_yTu7YBT4",
			width: 1080,
			height: 639
		},
		{
			id: "Siuwr3uCir0",
			width: 1080,
			height: 1440
		},
		{
			id: "alfhBV8JxlE",
			width: 1080,
			height: 1620
		},
		{
			id: "6_pFPo2YM9c",
			width: 1080,
			height: 1440
		},
		{
			id: "exfO5IC0etk",
			width: 1080,
			height: 1350
		},
		{
			id: "CY3wdG4eRoA",
			width: 1080,
			height: 1920
		},
		{
			id: "4-Dq3Gyozk8",
			width: 1080,
			height: 1440
		},
		{
			id: "yt1-v0TrOi8",
			width: 1080,
			height: 810
		},
		{
			id: "nRZoLSr0mEE",
			width: 1080,
			height: 864
		},
		{
			id: "5iYR93akU48",
			width: 1080,
			height: 720
		},
		{
			id: "yRc9FiM1Zdk",
			width: 1080,
			height: 1619
		},
		{
			id: "HXqpJnLyHzg",
			width: 1080,
			height: 1620
		},
		{
			id: "3bAblStd-IY",
			width: 1080,
			height: 607
		},
		{
			id: "a6ux9NBPJac",
			width: 1080,
			height: 1350
		},
		{
			id: "8qEuawM_txg",
			width: 1080,
			height: 1440
		},
		{
			id: "p0Fvb9MvLAY",
			width: 1080,
			height: 1350
		},
		{
			id: "72IuuwilrY8",
			width: 1080,
			height: 1350
		},
		{
			id: "Q3Qdb3ni-zw",
			width: 1080,
			height: 1620
		},
		{
			id: "AAFH_AADpRg",
			width: 1080,
			height: 2206
		},
		{
			id: "6JU5C73KQ5Q",
			width: 1080,
			height: 1620
		},
		{
			id: "UxZVUDxWppw",
			width: 1080,
			height: 720
		},
		{
			id: "X-Far-t1woI",
			width: 1080,
			height: 1620
		},
		{
			id: "Y1gBZbB_5bA",
			width: 1080,
			height: 720
		}
	],
	"2021":[],
	"2020":[],
	"2019":[],
	"2018":[],
	"2017":[],
	"2016":[],
	"2015":[],
	"2014":[],
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [index, setIndex] = useState(-1);

  const tabs = [
    { name: "2023", href: "#2023", current: activeTab === 0 },
    { name: "2022", href: "#2022", current: activeTab === 1 },
    { name: "2021", href: "#2021", current: activeTab === 2 },
    { name: "2020", href: "#2020", current: activeTab === 3 },
    { name: "2019", href: "#2019", current: activeTab === 4 },
    { name: "2018", href: "#2018", current: activeTab === 5 },
    { name: "2017", href: "#2017", current: activeTab === 6 },
    { name: "2016", href: "#2016", current: activeTab === 7 },
    { name: "2015", href: "#2015", current: activeTab === 8 },
    { name: "2014", href: "#2014", current: activeTab === 9 },
    { name: "2013", href: "#2013", current: activeTab === 10 },
  ];
	const firstTab = 2023

	const photos = unsplashPhotos[firstTab-activeTab].map((photo, index) => {
    const width = photo.width * 4;
    const height = photo.height * 4;
    return {
      src: unsplashLink(photo.id, width, height),
      key: `${index}`,
      width,
      height,
      // images: breakpoints.map((breakpoint) => {
      //   const breakpointHeight = Math.round((height / width) * breakpoint);
      //   return {
      //     src: unsplashLink(photo.id, breakpoint, breakpointHeight),
      //     width: breakpoint,
      //     height: breakpointHeight,
      //   };
      // }),
    };
  });

  const slides = photos.map(({ src, key, width, height, images }) => ({
    src,
    // key,
    // width,
    // height,
    // srcSet: images?.map((image) => ({
    // 	src: image.src,
    // 	width: image.width,
    // 	height: image.height
    // }))
  }));

  return (
    <>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
          {/* <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          /> */}
					{/* TABS */}
					<div>
						<div className="sm:hidden">
							<label htmlFor="tabs" className="sr-only">
								Select a tab
							</label>
							<select
								id="tabs"
								name="tabs"
								className="block mb-8 w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
								defaultValue={tabs.find((tab) => tab.current).name}
								onChange={(e) => setActiveTab(parseInt(e.target.value))}
							>
								{tabs.map((tab, index) => (
									<option key={tab.name} value={index}>
										{tab.name}
									</option>
								))}
							</select>
						</div>
						<div className="hidden mb-8 sm:block">
							<div className="border-b border-gray-200">
								<nav className="-mb-px flex" aria-label="Tabs">
									{tabs.map((tab, index) => (
										<a
											key={tab.name}
											href={tab.href}
											className={classNames(
												tab.current
													? 'border-cyan-500 text-cyan-600'
													: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
												'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm',
												{
													'border-cyan-500 text-cyan-600': activeTab === index,
												}
											)}
											aria-current={activeTab === index ? 'page' : undefined}
											onClick={() => setActiveTab(index)}
										>
											{tab.name}
										</a>
									))}
								</nav>
							</div>
						</div>
					</div>
          <PhotoAlbum
            layout="rows"
            photos={photos}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />
          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
						plugins={[Fullscreen, Slideshow]} //Fullscreen, Slideshow, Thumbnails, Zoom
          />
        </main>
      </div>
    </>
  );
}
