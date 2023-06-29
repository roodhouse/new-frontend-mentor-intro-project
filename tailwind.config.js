/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      orange: '#FF7979',
      green: '#38CC8B',
      purple: '#5E54A4',
      black: '#3D3B48',
      offWhite: '#DEDEDE',
      lightPurple: '#BAB7D4',
      lightGreen: '#77E2B3'
    }
  },
  plugins: [],
}