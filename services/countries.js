const baseUrl = 'https://restcountries.com/v3.1'

// Filtra solo los datos necesarios
const filterData = ({ data }) => (
  data.map(
    ({ name, flags, population, region = 'No', subregion = 'No', capital = 'No', tld = ['No'], currencies = {}, languages = {}, borders = [] }) => (
      { name, flags, population, region, subregion, capital, tld, currencies, languages, borders }
    )
  )
)

export async function searchCountriesbyRegion ({ region }) {
  try {
    const res = await fetch(`${baseUrl}/region/${region}`)
    if (res.status === 404) return []
    const data = await res.json()

    return filterData({ data })
  } catch (error) {
    console.error(error)
    throw new Error('Error searching countries by region')
  }
}

export async function searchCountriesByName ({ name }) {
  try {
    const res = await fetch(`${baseUrl}/name/${name}`)
    if (res.status === 404) return []
    const data = await res.json()

    return filterData({ data })
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function searchFiftyCountries () {
  try {
    const res = await fetch(`${baseUrl}/all`)
    if (res.status === 404) return []
    const data = await res.json()

    // Filtra solo los datos necesarios
    const filteredData = filterData({ data })

    // Obtener un índice aleatorio para el inicio del recorte
    const startIndex = Math.floor(Math.random() * 200)

    // Recortar los primeros 50 registros a partir del índice aleatorio
    const endIndex = startIndex + 50 >= 250 ? 250 : startIndex + 50
    const fifty = filteredData.slice(startIndex >= 200 ? 200 : startIndex, endIndex)

    return fifty
  } catch (error) {
    console.error(error)
    return []
  }
}
