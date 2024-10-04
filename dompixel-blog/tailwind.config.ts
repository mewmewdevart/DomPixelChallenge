/** @type {import('tailwindcss').Config} */
const custom = require('./app/utils/tokens.json');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            '10': custom.colors.brand.primary['10'].hex,
            '20': custom.colors.brand.primary['20'].hex,
            '30': custom.colors.brand.primary['30'].hex,
          },
          secondary: {
            '10': custom.colors.brand.secondary['10'].hex,
          },
          base: {
            '10': custom.colors.brand.base['10'].hex,
          },
        },
        suport: {
          information: {
            '10': custom.colors.suport.information['10'].hex,
          },
          error: {
            '10': custom.colors.suport.error['10'].hex,
          },
          warning: {
            '10': custom.colors.suport.warning['10'].hex,
          },
          success: {
            '10': custom.colors.suport.success['10'].hex,
          },
          message: {
            '10': custom.colors.suport.message['10'].hex,
          },
        },
      },
      fontSize: {
        'xlarge': custom.typography.text.xlarge.fontSize,
        'large': custom.typography.text.large.fontSize,
        'medium': custom.typography.text.medium.fontSize,
        'small': custom.typography.text.small.fontSize,
        'xsmall': custom.typography.text.xsmall.fontSize,
      },
      fontWeight: {
        'light': custom.typography.weight.light,
        'regular': custom.typography.weight.regular,
        'bold': custom.typography.weight.bold,
        'black': custom.typography.weight.black,
      },
      borderRadius: {
        'small': custom.border.small,
        'medium': custom.border.medium,
        'pill': custom.border.pill,
      },
    },
  },
  plugins: [],
};
