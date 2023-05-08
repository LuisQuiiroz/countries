const baseUrl = 'https://restcountries.com/v3.1'

export async function searchCountriesbyRegion ({ region }) {
  try {
    const res = await fetch(`${baseUrl}/region/${region}`)
    const data = await res.json()

    const filteredData = data.map(
      ({ name, flags, population, region = '', capital = '' }) => (
        { name, flags, population, region, capital }
      ))
    return filteredData
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

    const filteredData = data.map(
      ({ name, flags, population, region = '', capital = '' }) => (
        { name, flags, population, region, capital }
      ))
    return filteredData
  } catch (error) {
    console.error(error)
    throw new Error('Error searching countries by name')
  }
}
