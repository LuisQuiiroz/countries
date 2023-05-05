import { Header } from '@/components/Header'
import { Filters } from '@/components/Filters'
import { Countries } from '@/components/Countries'

export default function Home ({ data }) {
  return (
    <main className='bg-lm-very-light-gray dark:bg-dm-very-dark-blue text-lm-very-dark-blue dark:text-white min-h-screen'>
      <Header />
      <Filters />
      <Countries countries={data} />
    </main>
  )
}
export async function getServerSideProps () {
  // Obtener los datos de la API
  const url = 'https://restcountries.com/v3.1/all'
  const res = await fetch(url)
  const data = await res.json()

  // Obtener un índice aleatorio para el inicio del recorte
  const startIndex = Math.floor(Math.random() * 200)

  // Recortar los primeros 50 registros a partir del índice aleatorio
  const endIndex = startIndex + 50 >= 250 ? 250 : startIndex + 50
  const fifty = data.slice(startIndex >= 200 ? 200 : startIndex, endIndex)

  // Devolver los datos como propiedades
  return {
    props: { data: fifty }
  }
}
