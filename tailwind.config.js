/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "alcove-brown": "#6b4a1f",
        "alcove-dark": "#4b320f",
      },
    },
  },
  plugins: [],
}
