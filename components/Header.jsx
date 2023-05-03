import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

export const THEMES = {
  light: 'light',
  dark: 'dark',
  system: 'system'
}
export function Header () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // solucion al error de intentar renderizar la interfaz de usuario cuando el tema aun es undefined
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className='bg-lm-very-light-gray dark:bg-dm-dark-blue '>
      <div className='container mx-auto flex justify-between items-center h-20 px-6 sticky top-0 z-30'>
        <p className='text-lg md:text-3xl font-k-bold'>Where in the world?</p>
        {
            theme === THEMES.dark
              ? (
                <button
                  className='flex items-center justify-center gap-2 rounded py-2 px-4 hover:bg-gray-100 dark:hover:bg-dm-very-dark-blue '
                  onClick={() => setTheme(THEMES.light)}
                >
                  <p className='w-6 h-6'><SunIcon /></p>
                  <p>Light Mode</p>
                </button>
                )
              : (
                <button
                  className='flex items-center justify-center gap-2 rounded py-2 px-4 hover:bg-gray-100 dark:hover:bg-dm-very-dark-blue '
                  onClick={() => setTheme(THEMES.dark)}
                >
                  <MoonIcon />
                  <p>Dark Mode</p>
                </button>
                )
          }
      </div>
    </div>
  )
}
