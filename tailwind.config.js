/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#b9e1b9',
          300: '#8fd08f',
          400: '#5eb85e',
          500: '#3d9d3d',
          600: '#2d7d2d',
          700: '#256525',
          800: '#1f521f',
          900: '#1a431a',
        },
        secondary: {
          50: '#fbf8f0',
          100: '#f7f1d9',
          200: '#f0e3b3',
          300: '#e9d48c',
          400: '#e2c666',
          500: '#dbb83f',
          600: '#c7a632',
          700: '#a4882a',
          800: '#826c21',
          900: '#6a581c',
        },
        accent: {
          50: '#f0f7fb',
          100: '#d9ebf7',
          200: '#b3d7f0',
          300: '#8cc3e9',
          400: '#66afe2',
          500: '#3f9bdb',
          600: '#327dc7',
          700: '#2a65a4',
          800: '#215282',
          900: '#1c436a',
        },
      },
    },
  },
  plugins: [],
}
