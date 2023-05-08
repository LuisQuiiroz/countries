import Link from 'next/link'

import { Header } from '@/components/Header'
import { LeftIcon } from '@/components/Icons'
import Image from 'next/image'
import { searchCountriesByName } from '@/services/countries'

export default function Country ({ data }) {
  if (data.length === 0) return null // poner una pagina 404
  const { name, flags, population, region, subregion, capital, tld, currencies, languages, borders } = data[0]

  const getNativeName = ({ name }) => {
    if (!name) return
    if (!name.nativeName) return name.common
    const keys = Object.keys(name.nativeName)
    const lastKey = keys[keys.length - 1]
    return name.nativeName[lastKey].common
  }
  const nativeName = getNativeName({ name })

  const allCurrencies = Object.keys(currencies).length > 0 ? Object.values(currencies).map(currency => currency.name).join(', ') : 'No'
  const allLanguages = Object.keys(languages).length > 0 ? Object.values(languages).join(', ') : 'No'

  return (
    <div className='bg-lm-very-light-gray dark:bg-dm-very-dark-blue text-lm-very-dark-blue dark:text-white min-h-screen'>
      <Header />
      {data && (
        <div className='p-8 container mx-auto'>
          <Link href='/' className='w-32 py-2 px-6 bg-lm-very-light-gray dark:bg-dm-dark-blue shadow-lg flex justify-center mt-8 mb-16 rounded gap-2 hover:bg-lm-very-light-gray/50 dark:hover:bg-dm-dark-blue/50'>
            <p className='w-6 h-6'><LeftIcon /></p>
            <p>Back</p>
          </Link>
          <div className='lg:flex lg:gap-28'>
            <div className='pb-8 md:w-2/3 md:mx-auto lg:p-0 lg:w-5/12'>
              <Image
                src={flags.svg}
                alt={name.common}
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto rounded'
                priority
              />
            </div>
            <div className='md:px-16 lg:w-7/12 lg:px-0'>
              <h1 className='pb-4 text-3xl font-k-bold'>{name.common}</h1>
              <div className='md:flex justify-between pb-8 lg:gap-12'>
                <div className='pb-8 md:p-0'>
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
                <div>
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
              </div>

              {
                borders.length > 0 && (
                  <div className='pb-8 lg:pt-8'>
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
        </div>

      )}
    </div>
  )
}

export async function getServerSideProps (context) {
  const { country } = context.query

  // Obtener los datos de la API
  const data = await searchCountriesByName({ name: country })
  return {
    props: { data }
  }
}
