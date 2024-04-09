/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif']
      },
    },
    // colors: {
    //   'primary': '#111F4D',
    //   'white': '#ffffff',
    //   'light': '#b1d4e0' ,
    // }
  },
  plugins: [],
}

