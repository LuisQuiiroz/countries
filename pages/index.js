import { Header } from '@/components/Header'
import { Filters } from '@/components/Filters'
import { Countries } from '@/components/Countries'
import { useFilters } from '@/hooks/useFilters'

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
  try {
    const url = 'https://restcountries.com/v3.1/all'
    const res = await fetch(url)
    const data = await res.json()

    // Filtra solo los datos necesarios
    const filteredData = data.map(
      ({ name, flags, population, region = '', capital = '' }) => (
        { name, flags, population, region, capital }
      ))

    // Obtener un índice aleatorio para el inicio del recorte
    const startIndex = Math.floor(Math.random() * 200)

    // Recortar los primeros 50 registros a partir del índice aleatorio
    const endIndex = startIndex + 50 >= 250 ? 250 : startIndex + 50
    const fifty = filteredData.slice(startIndex >= 200 ? 200 : startIndex, endIndex)

    // Devolver los datos como propiedades
    return {
      props: { data: fifty }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        data: []
      }
    }
  }
}
