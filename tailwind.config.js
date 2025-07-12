/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f4fa',
          100: '#b9e3f4',
          200: '#8fd2ee',
          300: '#65c1e8',
          400: '#3bb0e2',
          500: '#0992D0', // Azure Gulf
          600: '#0177A6',
          700: '#015b7d',
          800: '#003f53',
          900: '#00232a',
        },
        accent: {
          50: '#fff6e5',
          100: '#ffe3b3',
          200: '#ffd180',
          300: '#ffbe4d',
          400: '#ffac1a',
          500: '#F5A623', // Desert Amber
          600: '#cc8600',
          700: '#a36900',
          800: '#7a4c00',
          900: '#523000',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Inter Tight',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} 