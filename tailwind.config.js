/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", 
  ],
  safelist: ['animate-fadeIn', 'opacity-0'],
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
        slideDownAndFadeOut: {
          '0%': { transform: 'translateY(0%)', opacity: '1' },
          '80%': { transform: 'translateY(100%)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' }, 
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        growIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        squishReveal: {
          '0%': { transform: 'scaleX(0)', opacity: '0' }, // Fully squished and invisible
          '100%': { transform: 'scaleX(1)', opacity: '1' }, // Fully revealed
        },
        dropIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '80%': { transform: 'translateY(10%)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        riseAndShrink: {
          '0%': { transform: 'translateY(200px) scale(1.3)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.8s ease-out forwards',
        fadeSlideUpShort: 'fadeSlideUp 0.5s ease-out forwards',
        slideUpFade: 'slideUpFade 0.5s ease-in-out',
        slideInFade: 'slideInFade 0.5s ease-in-out',
        slideDownAndFadeOut: 'slideDownAndFadeOut 0.3s ease-out forwards',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        grow: 'growIn 0.5s ease-out forwards',
        squishReveal: 'squishReveal 0.5s ease-out forwards',
        dropIn: 'dropIn 0.6s ease-out',
        riseAndShrink: 'riseAndShrink 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

