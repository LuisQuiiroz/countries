import { Header } from '@/components/Header'
import countries from '@/pages/api/data.json'
import { Card } from '@/components/Card'
import { Filters } from '@/components/Filters'

export default function Home () {
  const countriesToShow = countries.slice(0, 10)
  return (
    <main className='bg-lm-very-light-gray dark:bg-dm-very-dark-blue text-lm-very-dark-blue dark:text-white min-h-screen'>
      <Header />
      <Filters />
      <div className='container mx-auto'>
        <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
          {countriesToShow.map((item) => (
            <Card item={item} key={item.name} />
          ))}
        </div>
      </div>
    </main>
  )
}
