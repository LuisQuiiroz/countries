import { useState } from 'react'
import { ChevronIcon, SearchIcon } from './Icons'

const REGIONS = ['Filter by Region', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']
export function Filters () {
  const [region, setRegion] = useState(REGIONS[0])
  const [filterRegion, setFilterRegion] = useState(false)
  return (
    <div className='container mx-auto'>
      <div className='flex items-center py-4 px-6 m-4 rounded-lg gap-6 dark:bg-dm-dark-blue text-lm-dark-gray dark:text-white shadow-md'>
        <SearchIcon />
        <input
          className='bg-transparent dark:placeholder:text-white placeholder:text-sm w-full focus:outline-none'
          type='text'
          placeholder='Search for a country...'
        />
      </div>
      <div>
        <div
          className='w-60 flex justify-between items-center py-4 px-6 m-4 mb-2 rounded-lg gap-6 dark:bg-dm-dark-blue dark:text-white shadow-md cursor-pointer'
          onClick={() => setFilterRegion(prev => !prev)}
        >
          <p>{region}</p>
          <ChevronIcon />
        </div>
        <div className={`absolute w-60 py-4 px-6 mx-4 rounded-lg bg-lm-very-light-gray dark:bg-dm-dark-blue dark:text-white shadow-md ${filterRegion ? '' : 'hidden'}`}>
          {REGIONS.slice(1).map(region => (
            <button
              key={region}
              className='w-full p-1 hover:brightness-75 text-left'
              onClick={() => setRegion(region)}
            >{region}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
