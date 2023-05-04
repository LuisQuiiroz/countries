import Link from 'next/link'

export function Card ({ item }) {
  const { name, flags, population, region, capital } = item
  return (
    <div key={name.common} className='rounded-lg pb-4 shadow-md dark:bg-dm-dark-blue'>
      {/* todo: hacer que la imagen se vea bien */}
      {/* <Image src={flags.png} alt={name} fill sizes='33vw' /> */}
      <img src={flags.png} alt={flags.alt} className='rounded-t-lg' />
      <div className='p-6'>
        <Link href={`/country/${name.common.toLowerCase()}`}>
          <h3 className='pb-4 font-k-bold text-2xl'>{name.common}</h3>
        </Link>
        <p className='font-k-bold leading-relaxed'>
          Population: <span className='font-normal'>{population.toLocaleString('en-US')}</span>
        </p>
        <p className='font-k-bold leading-relaxed'>
          Region: <span className='font-normal'>{region}</span>
        </p>
        <p className='font-k-bold leading-relaxed'>
          Capital: <span className='font-normal'>{capital[0]}</span>
        </p>
      </div>
    </div>
  )
}
