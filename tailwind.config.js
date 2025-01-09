/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': '#121212', // Custom dark black color
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    

  },
  plugins: [],
}

