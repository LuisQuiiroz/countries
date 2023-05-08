import { FiltersContext } from '@/context/filters'
import { searchCountriesByName, searchCountriesbyRegion } from '@/services/countries'
import { REGIONS } from '@/utils/constants'
import { useContext, useRef, useState } from 'react'

export function useFilters () {
  const { region, setRegion, countries, setCountries } = useContext(FiltersContext)
  const [loading, setLoading] = useState(false)

  const prevRegion = useRef(region)

  const getCountriesByRegion = async ({ region }) => {
    if (prevRegion.current === region) return
    console.log('hi')
    try {
      setLoading(true)
      prevRegion.current = region
      setRegion(region)
      const newCountries = await searchCountriesbyRegion({ region })
      setCountries(newCountries)
    } catch (error) {
      console.error(error)
      throw new Error('Error getting the list of countries ')
    } finally {
      setLoading(false)
    }
  }

  const getCountriesByName = async ({ name }) => {
    if (name.trim() === '') return
    try {
      setLoading(true)
      setRegion(REGIONS[0])
      const newCountries = await searchCountriesByName({ name })
      setCountries(newCountries)
    } catch (error) {
      console.error(error)
      throw new Error('Error getting the list of countries')
    } finally {
      setLoading(false)
    }
  }

  return {
    region,
    countries,
    loading,
    getCountriesByRegion,
    getCountriesByName
  }
}
