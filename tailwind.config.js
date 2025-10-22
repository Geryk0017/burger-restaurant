/** @type {import('tailwindcss').Config} */
export default {
  // include Vue single-file components, JS/TS entry files and index.html
  content: [
    './index.html',
    './src/**/*.{html,js,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Blinker': ['Blinker', 'sans-serif'],
        'Bowlby': ['Bowlby One', 'cursive'],
        'Oswald': ['Oswald', 'sans-serif'],
      },
      colors: {
        bgcolor: '#EE4A1E',
        buttons: '#4f46e5',
      }
    },
  },
  plugins: [],
}

