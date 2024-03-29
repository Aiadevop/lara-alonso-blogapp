/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2md': '900px',
        '3xl': '1600px',
        '4xl': '1800px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black2': '#1A1A1A',
        'black': '#181818',
        'blackdark': '#1F1F1F',
        'blackmedium': '#333333',
        'blackgrey': '#636363',
        'blacklight': '#A3A3A3',
        'blackblue': '#425E59',
        'whiteicons': '#FFFAFA',
        'turq': '#07FAEB',
        'turqdark': '#09ADA2',
        'violetcustom': '#FA00D5',
        'fuin': 'gradient-to-r from-fuchsia-600 to-indigo-600',
        'violetitle': '#700e7f',
        'backportfolio' : '#2E3336'
      },
      fontFamily: {
        'roboto': 'roboto',
        'mono': 'ui-monospace'
      }
    },
  },
  plugins: [],
}
