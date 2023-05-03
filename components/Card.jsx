
export function Card ({ item }) {
  const { name, flags, population, region, capital } = item
  return (
    <div key={name} className='rounded-lg pb-4 shadow-md dark:bg-dm-dark-blue'>
      {/* todo: hacer que la imagen se vea bien */}
      {/* <Image src={flags.png} alt={name} fill sizes='33vw' /> */}
      <img src={flags.png} alt={name} className='rounded-t-lg' />
      <div className='p-6'>
        <h3 className='pb-4 font-k-bold text-2xl'>{name}</h3>
        <p className='font-k-bold leading-relaxed'>
          Population: <span className='font-normal'>{population.toLocaleString('en-US')}</span>
        </p>
        <p className='font-k-bold leading-relaxed'>
          Region; <span className='font-normal'>{region}</span>
        </p>
        <p className='font-k-bold leading-relaxed'>
          Capital: <span className='font-normal'>{capital}</span>
        </p>
      </div>
    </div>
  )
}
