/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:'#EC6724',
          lightGray: '#D9D9D9',
        },
      },
    },
  },
  plugins: [
  ],
}
