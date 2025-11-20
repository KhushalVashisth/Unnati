/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                  // Vite entry point
    "./src/**/*.{js,jsx,ts,tsx}",    // All source files
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}
