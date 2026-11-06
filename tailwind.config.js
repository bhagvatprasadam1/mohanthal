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
          DEFAULT: '#C96A24',
          hover: '#B55A1A',
          dark: '#93440F',
          light: '#E28643',
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
          DEFAULT: '#536B3E',
          dark: '#3E512E',
          light: '#6E8B54',
        },
        gold: {
          DEFAULT: '#C89B3C',
          light: '#DFB456',
          dark: '#A67E28',
        },
        'dark-text': '#2B211B',
        'muted-text': '#756A60',
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
