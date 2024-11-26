/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' }, // Start further down
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeSlideUpShort: {
          '0%': { opacity: '0', transform: 'translateY(10px)' }, // Start further down
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpFade: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100px)', opacity: '0' },
        },
        slideInFade: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 1s ease-out forwards',
        fadeSlideUpShort: 'fadeSlideUp 0.5s ease-out forwards',
        slideUpFade: 'slideUpFade 0.5s ease-in-out',
        slideInFade: 'slideInFade 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

