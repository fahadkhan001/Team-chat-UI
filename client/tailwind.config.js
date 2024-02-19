/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'royal-green':'#f5f5f7',
        'royal-orange':'#FF731D',
        'royal-bp':'#A19791',
        "royal-bg":'#F7F5F4',
        "royal-circle":"#FF731D"
      }
    },
  },
  plugins: [],
}