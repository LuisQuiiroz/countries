import countries from '@/pages/api/data.json'

import { Header } from '@/components/Header'
import { LeftIcon } from '@/components/Icons'

export default function Country () {
  const country = countries[8]
  const { name, flags, population, region, subregion, capital, tld, currencies, languages, borders } = country

  const getNativeName = ({ name }) => {
    const keys = Object.keys(name.nativeName)
    const lastKey = keys[keys.length - 1]
    return name.nativeName[lastKey].common
  }
  const nativeName = getNativeName({ name })

  const allCurrencies = Object.values(currencies).map(currency => currency.name).join(', ')
  const allLanguages = Object.values(languages).join(', ')

  return (
    <div className='bg-lm-very-light-gray dark:bg-dm-very-dark-blue text-lm-very-dark-blue dark:text-white min-h-screen'>
      <Header />
      <div className='p-8'>
        <button className='py-2 px-6 bg-lm-very-light-gray dark:bg-dm-dark-blue shadow-lg flex justify-center mb-8 rounded gap-2 hover:bg-lm-very-light-gray/50 dark:hover:bg-dm-dark-blue/50'>
          <p className='w-6 h-6'><LeftIcon /></p>
          <p>Back</p>
        </button>
        <div className='pb-8'>
          <img src={flags.png} alt='asd' />
        </div>
        <div className='pb-8'>
          <h1 className='pb-4 text-2xl font-k-bold'>{name.common}</h1>
          <p className='font-k-bold leading-relaxed tracking-wide p-1'>
            Native Name: <span className='font-normal'>{nativeName}</span>
          </p>
          <p className='font-k-bold leading-relaxed tracking-wide p-1'>
            Population: <span className='font-normal'>{population.toLocaleString('en-US')}</span>
          </p>
          <p className='font-k-bold leading-relaxed tracking-wide p-1'>
            Region: <span className='font-normal'>{region}</span>
          </p>
          <p className='font-k-bold leading-relaxed tracking-wide p-1'>
            Sub Region: <span className='font-normal'>{subregion}</span>
          </p>
          <p className='font-k-bold leading-relaxed tracking-wide p-1'>
            Capital: <span className='font-normal'>{capital}</span>
          </p>
        </div>
        <div className='pb-8'>
          <p className='font-k-bold leading-relaxed tracking-wide p-1'>
            Top Level Domain: <span className='font-normal'>{tld[0]}</span>
          </p>
          <p className='font-k-bold leading-relaxed tracking-wide p-1'>
            Currencies: <span className='font-normal'>{allCurrencies}</span>
          </p>
          <p className='font-k-bold leading-relaxed tracking-wide p-1'>
            Languages: <span className='font-normal'>{allLanguages}</span>
          </p>
        </div>
        {
          borders && (
            <div className='pb-8'>
              <h3 className='text-lg font-k-bold'>Border Countries:</h3>
              <div className='grid grid-cols-3 gap-4 py-4'>
                {borders?.map(border => (
                  <p
                    className='py-1 px-4 bg-lm-very-light-gray dark:bg-dm-dark-blue shadow-md flex justify-center'
                    key={border}
                  >{border}
                  </p>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
