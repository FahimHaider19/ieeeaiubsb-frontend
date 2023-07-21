const products = [
  {
    name: 'Abozzo 2021',
    href: '#',
    price: '$48',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    link: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageAlt: 'Abozzo 2021',
  },
  {
    name: 'Abozzo 2021',
    href: '#',
    price: '$48',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    link: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageAlt: 'Abozzo 2021',
  },
  {
    name: 'Abozzo 2021',
    href: '#',
    price: '$48',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    link: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageAlt: 'Abozzo 2021',
  },
  {
    name: 'Abozzo 2021',
    href: '#',
    price: '$48',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    link: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageAlt: 'Abozzo 2021',
  },
  {
    name: 'Abozzo 2021',
    href: '#',
    price: '$48',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    link: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageAlt: 'Abozzo 2021',
  },
  {
    name: 'Abozzo 2021',
    href: '#',
    price: '$48',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    link: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageAlt: 'Abozzo 2021',
  },
  {
    name: 'Abozzo 2021',
    href: '#',
    price: '$48',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    link: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageAlt: 'Abozzo 2021',
  },
  {
    name: 'Abozzo 2021',
    href: '#',
    price: '$48',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    link: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageAlt: 'Abozzo 2021',
  },
  
]

export default function Abozzo() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.link} className="w-fit">
              <div className="w-full max-w-xs overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <p className="mt-1 text-lg text-center font-medium text-gray-600">{product.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
