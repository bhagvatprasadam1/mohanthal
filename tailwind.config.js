/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B04F0E',
          hover: '#98430B',
          dark: '#803607',
          light: '#C96A24',
        },
        'deep-brown': {
          DEFAULT: '#3A2116',
          dark: '#24140D',
          light: '#523122',
        },
        cream: {
          DEFAULT: '#FFF8ED',
          card: '#FCF5E8',
        },
        'light-beige': {
          DEFAULT: '#F7EBD8',
          hover: '#EFE0C7',
        },
        'muted-green': {
          DEFAULT: '#435832',
          dark: '#354627',
          light: '#5A7543',
        },
        gold: {
          DEFAULT: '#785507',
          light: '#916709',
          dark: '#614404',
        },
        'dark-text': '#2B211B',
        'muted-text': '#5A5046',
      },
      fontFamily: {
        serif: ['"Tenor Sans"', 'Georgia', 'serif'],
        sans: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        tenor: ['"Tenor Sans"', 'serif'],
        nunito: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        jost: ['"Jost"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': 'none',
        'warm': 'none',
        'luxury': 'none',
        'none': 'none',
      },
    },
  },
  plugins: [],
}
