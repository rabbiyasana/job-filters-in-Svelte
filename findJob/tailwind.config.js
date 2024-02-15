/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(70, 68, 68)',
      },
      width: {
        '80vw': '80vw',
      },
    },
  },
  plugins: [],
}

