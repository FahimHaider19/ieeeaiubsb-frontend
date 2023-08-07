export default function Post({post}) {
  return (
    <a
      href={"/post/" + post.id}
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
          <div className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">
              {post.title}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-gray-900">
          {post.date}
        </p>
      </div>
    </a>
  )
}