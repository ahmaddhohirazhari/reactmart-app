const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
        quicksand: ['Quicksand', ...fontFamily.sans],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        xl: ['4.5rem', '1.1'], // 72px
        l: ['1.875rem', '1.3'], // 30px
        m: ['1rem', '1.5'], // 16px
        s: ['0.875rem', '1.5'], // 14px
        xs: ['0.8125rem', '1.5'], // 13px
      },
      colors: {
        primary: {
          50: '#E6F7F6',
          100: '#B0E8E5',
          DEFAULT: '#01A49E',
          500: '#01A49E',
          900: '#005C59',
        },
        secondary: {
          50: '#F8F9FC',
          100: '#EBEEF6',
          DEFAULT: '#EBEEF6',
          500: '#A0AEC0',
          900: '#4A5568',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: if using form plugin
  ],
};
