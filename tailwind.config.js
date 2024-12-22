/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'christmas-red': '#D42426',
        'christmas-green': '#165B33',
        'snow-white': '#F8F8FF'
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' }
        }
      },
      animation: {
        fall: 'fall linear infinite'
      }
    },
  },
  plugins: [],
}
