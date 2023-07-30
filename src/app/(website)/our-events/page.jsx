'use client'
import { useState } from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: `AIUBians On Erasmus`,
    category: `Webinar`,
    imageUrl: "/images/event/",
    date: "December 23, 2022",
    datetime: "2022/12/23",
  },

  {
    id: 2,
    title: `Seminar on International Day of Medical Physics & World Radiography Day`,
    category: `Seminar`,
    imageUrl: "/images/event/",
    date: "November 8, 2022",
    datetime: "2022/11/08",
  },

  {
    id: 3,
    title: `Seminar on A Journey of Unknowns in the Femto-Nano World`,
    category: `Seminar`,
    imageUrl: "/images/event/",
    date: "October 18, 2022",
    datetime: "2022/10/18",
  },

  {
    id: 4,
    title: `THE IEEE AIUB Student branch celebrated “IEEE Day 2022”`,
    category: `IEEE DAY`,
    imageUrl: "/images/event/",
    date: "October 10, 2022",
    datetime: "2022/10/10",
  },

  {
    id: 5,
    title: `Seminar on “Bangladesh at Space and James Webb Space Telescope.”`,
    category: `Seminar`,
    imageUrl: "/images/event/",
    date: "September 28, 2022",
    datetime: "2022/09/28",
  },

  {
    id: 6,
    title: `Members’ Orientation 2022 – IEEE AIUB Student Branch`,
    category: `Orientation`,
    imageUrl: "/images/event/",
    date: "August 7, 2022",
    datetime: "2022/08/07",
  },

  {
    id: 7,
    title: `Seminar on “Biomedical Research for Sustainable Development.” organized by CBR & IEEE EMBS AIUB Chapter`,
    category: `EMBS`,
    imageUrl: "/images/event/",
    date: "July 27, 2022",
    datetime: "2022/07/27",
  },

  {
    id: 8,
    title: `IEEE AIUB Student Branch organized “IEEE Student Professional Awareness Venture (SPAVe 5.0)”`,
    category: `Flagship Event`,
    imageUrl: "/images/event/",
    date: "December 18, 2021",
    datetime: "2021/12/18",
  },

  {
    id: 9,
    title: `AIUBians on ERASMUS`,
    category: `Webinar`,
    imageUrl: "/images/event/",
    date: "November 23, 2021",
    datetime: "2021/11/23",
  },

  {
    id: 10,
    title: `Webinar on “Insights into the Single Line Diagram, Layout & Panel Design of MVLV Substations”`,
    category: `IAS`,
    imageUrl: "/images/event/",
    date: "November 17, 2021",
    datetime: "2021/11/17",
  },
];

export default function OurEvents() {

  const postsPerPage = 9;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return posts.slice(startIndex, startIndex + postsPerPage);
  };

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 ">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="mt-1 text-center w-full text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Events
          </h1>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-500 sm:mt-4">
            Welcome to our Events section. Here, you will find a complete
            listing of exciting and engaging events hosted by IEEE AIUB Student
            Branch.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-md md:max-w-none grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getPagePosts().map((post) => (
            <a
              href={"/post/"+post.id}
              key={post.title}
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
                    {post.category}
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                  </a>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">
                  {post.date}
                </p>
              </div>
            </a>
          ))}
        </div>
        <nav className="flex items-center justify-between pt-8 sm:pt-12 border-t border-gray-200 px-4 sm:px-0">
          <div className="-mt-px flex w-0 flex-1">
            <button
              onClick={handlePreviousPage}
              className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              disabled={currentPage === 1}
            >
              <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Previous
            </button>
          </div>
          <div className="hidden md:-mt-px md:flex">
          {/* Render page numbers dynamically */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`inline-flex items-center border-t-2 ${
                pageNum === currentPage
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } px-4 pt-4 text-sm font-medium`}
              aria-current={pageNum === currentPage ? 'page' : undefined}
            >
              {pageNum}
            </button>
          ))}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <button
            onClick={handleNextPage}
            className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
        </div>
        </nav>
      </div>
    </div>
  );
}
