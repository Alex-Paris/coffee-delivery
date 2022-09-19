/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        mono: ['Bold 2', 'monospace'],
      },
      backgroundColor: {
        background: '#fafafa',
        white: '#ffffff',
        'base-card': '#f3f2f2',
        'base-input': '#ededed',
        'base-button': '#e6e5e5',
        'base-hover': '#d7d5d5',
        'purple-light': '#ebe5f9',
        purple: '#8047f8',
        'purple-dark': '#4b2995',
        'yellow-light': '#f1e9c9',
        yellow: '#dbac2c',
        'yellow-dark': '#c47f17',
      },
      textColor: {
        'base-label': '#8d8686',
        'base-text': '#8d8686',
        'base-subtitle': '#403937',
        'base-title': '#272221',
        'purple-dark': '#4b2995',
        'yellow-dark': '#c47f17',
      },
    },
  },
  plugins: [],
}
