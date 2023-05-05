import Image from 'next/image'
import Link from 'next/link'

export function Card ({ item }) {
  const { name, flags, population, region, capital } = item
  return (
    <div key={name.common} className='rounded-lg pb-4 shadow-md dark:bg-dm-dark-blue'>
      <Image
        src={flags.svg}
        alt={name.common}
        width='0'
        height='0'
        sizes='100vw'
        className='w-full h-auto rounded-t-lg'
      />
      <div className='p-6'>
        <Link href={`/country/${name.common.toLowerCase()}`}>
          <h3 className='pb-4 font-k-bold text-2xl cursor-pointer hover:opacity-50'>{name.common}</h3>
        </Link>
        <p className='font-k-bold leading-relaxed tracking-wide p-1'>
          Population: <span className='font-normal'>{population.toLocaleString('en-US')}</span>
        </p>
        <p className='font-k-bold leading-relaxed tracking-wide p-1'>
          Region: <span className='font-normal'>{region}</span>
        </p>
        <p className='font-k-bold leading-relaxed tracking-wide p-1'>
          Capital: <span className='font-normal'>{capital[0]}</span>
        </p>
      </div>
    </div>
  )
}
