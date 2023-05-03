/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
        Nunito: ['Nunito Sans', 'sans-serif']
      },
      fontWeight: {
        'k-bold': 700
      },
      colors: {
        'dm-dark-blue': 'hsl(209, 23%, 22%)',
        'dm-very-dark-blue': 'hsl(207, 26%, 17%)',
        'lm-very-dark-blue': 'hsl(200, 15%, 8%)',
        'lm-dark-gray': 'hsl(0, 0%, 52%)',
        'lm-very-light-gray': 'hsl(0, 0%, 98%)'

        // Dark mode
        // 'dm-very-dark-blue': 'hsl(207, 26%, 17%)', // (Background)
        // 'dm-dark-blue': 'hsl(209, 23%, 22%)', //  (Elements)
        // White (Text)

        // Light Mode
        // 'lm-very-light-gray': 'hsl(0, 0%, 98%)' // (Background)
        //  White (Elements)
        // 'lm-very-dark-blue': 'hsl(200, 15%, 8%)', // (Text)
        // 'lm-dark-gray': 'hsl(0, 0%, 52%)', // (Input)

      }
    }
  },
  plugins: []
}
