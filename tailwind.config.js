const { green, grass, mauve, iris, gray, lime } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}', 
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.{vue,js,ts,jsx,tsx}',
    './src/pages/**/*.{vue,js,ts,jsx,tsx}', 
    './src/app.vue', 
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['vazir', 'sans-serif'],
      },
      colors: {
        ...mauve,
        ...green,
        ...grass,
        ...iris,
        ...gray,
        ...lime
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}

