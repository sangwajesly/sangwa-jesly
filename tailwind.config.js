/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
        mono: ['Space Mono', 'monospace'],
        display: ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
