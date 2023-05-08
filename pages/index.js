import { Header } from '@/components/Header'
import { Filters } from '@/components/Filters'
import { Countries } from '@/components/Countries'
import { useFilters } from '@/hooks/useFilters'
import { searchFiftyCountries } from '@/services/countries'

export default function Home ({ data }) {
  const { countries } = useFilters()
  const allCountries = countries.length <= 0 ? data : countries
  return (
    <main className='bg-lm-very-light-gray dark:bg-dm-very-dark-blue text-lm-very-dark-blue dark:text-white min-h-screen'>
      <Header />
      <Filters />
      {allCountries.length <= 0
        ? (
          <div className='container mx-auto p-8'>
            <h1 className='text-2xl'>No countries found to show</h1>
          </div>
          )
        : (
          <Countries countries={allCountries} />
          )}
    </main>

  )
}
export async function getServerSideProps () {
  // Obtener los datos de la API
  const data = await searchFiftyCountries()
  return {
    props: { data }
  }
}
