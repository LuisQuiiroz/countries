import { Card } from './Card'

export function Countries ({ countries }) {
  console.log(countries.length)
  return (
    <div className='container mx-auto'>
      <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
        {countries.map((item) => (
          <Card item={item} key={item.name.common} />
        ))}
      </div>
    </div>
  )
}
