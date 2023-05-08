import { REGIONS } from '@/utils/constants'
import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }, context) {
  const [region, setRegion] = useState(REGIONS[0])
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  if (!context) throw new Error('FiltersProvider must be used within the FiltersContext provider')

  return (
    <FiltersContext.Provider value={{
      region,
      setRegion,
      search,
      setSearch,
      countries,
      setCountries
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
