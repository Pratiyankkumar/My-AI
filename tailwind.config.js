/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'scroll 25s linear infinite',
        'fade': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }
    }
  },
  plugins: [],
};

