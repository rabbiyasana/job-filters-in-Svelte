/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        customGray: '#8F8F91',
        backColor: rgb(230, 240, 249),
      },
      width: {
        '80vw': '80vw',
      },
      screens: {
        'xs': '480px', 
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

