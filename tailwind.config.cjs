/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        cursive: ['"Baloo 2"', 'cursive'],
      },
      backgroundImage: {
        coffee: "url('/coffee-logo.svg')",
      },
      colors: {
        background: '#fafafa',
        white: '#ffffff',
        'base-card': '#f3f2f2',
        'base-input': '#ededed',
        'base-button': '#e6e5e5',
        'base-hover': '#d7d5d5',
        'base-label': '#8d8686',
        'base-text': '#574f4d',
        'base-subtitle': '#403937',
        'base-title': '#272221',
        'purple-light': '#ebe5f9',
        purple: '#8047f8',
        'purple-dark': '#4b2995',
        'yellow-light': '#f1e9c9',
        yellow: '#dbac2c',
        'yellow-dark': '#c47f17',
      },
      gridTemplateColumns: {
        fill: 'auto 1fr',
      },
      borderRadius: {
        card: '6px 36px',
      },
    },
  },
  plugins: [],
}
