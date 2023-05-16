import { useState } from 'react'
import { ChevronIcon, SearchIcon } from './Icons'
import { REGIONS } from '@/utils/constants'
import { useFilters } from '@/hooks/useFilters'

export function Filters () {
  const [filterRegion, setFilterRegion] = useState(false)
  const { region, search, onChangeSearch, getCountriesByRegion, getCountriesByName } = useFilters()

  const toggleFilterRegion = () => setFilterRegion(prev => !prev)

  const onChangeInput = (e) => {
    const newSearch = e.target.value
    onChangeSearch({ newSearch })
    getCountriesByName({ name: newSearch.toLowerCase() })
  }

  const onClickRegion = ({ region }) => {
    getCountriesByRegion({ region })
    toggleFilterRegion()
  }

  return (
    <div className='container mx-auto md:flex md:justify-between md:px-4'>
      <div className='flex items-center py-4 px-6 m-4 rounded-lg gap-6 dark:bg-dm-dark-blue text-lm-dark-gray dark:text-white shadow-md md:w-2/3'>
        <SearchIcon />
        <input
          className='bg-transparent dark:placeholder:text-white placeholder:text-sm w-full focus:outline-none'
          type='text'
          placeholder='Search for a country...'
          value={search}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <div
          className='w-60 flex justify-between items-center py-4 px-6 m-4 mb-2 rounded-lg gap-6 dark:bg-dm-dark-blue dark:text-white shadow-md cursor-pointer'
          onClick={() => toggleFilterRegion()}
        >
          <p>{region}</p>
          <ChevronIcon />
        </div>
        <div className={`absolute w-60 py-4 px-6 mx-4 rounded-lg bg-lm-very-light-gray dark:bg-dm-dark-blue dark:text-white shadow-md ${filterRegion ? '' : 'hidden'}`}>
          {REGIONS.slice(1).map(region => (
            <button
              key={region}
              className='w-full p-1 hover:brightness-75 text-left'
              onClick={() => onClickRegion({ region })}
            >{region}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
