import { FiltersProvider } from '@/context/filters'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem attribute='class'>
      <FiltersProvider>
        <Component {...pageProps} />
      </FiltersProvider>
    </ThemeProvider>
  )
}
