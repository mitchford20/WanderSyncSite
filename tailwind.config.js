/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'baby-blue': 'var(--background-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}