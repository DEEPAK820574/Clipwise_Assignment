/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom-hover': '0px 4px 50px 0px rgba(120, 143, 156, 0.25)',
        'custom-button-shadow': '0px 10px 25px 0px rgba(112, 184, 251, 0.45)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}