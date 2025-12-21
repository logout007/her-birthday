/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-soft': '#fce7f3',
        'rose-medium': '#fbcfe8',
        'rose-dark': '#f472b6',
      },
      keyframes: {
        // ... (keep all previous keyframes, just update confetti ones)
        
        // Enhanced Confetti with proper translateY
        'confetti-fall-1': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(100vh) translateX(80px) rotate(720deg) scale(0.2)',
          },
        },
        'confetti-fall-2': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(100vh) translateX(-60px) rotate(-720deg) scale(0.2)',
          },
        },
        'confetti-fall-3': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(100vh) translateX(120px) rotate(360deg) scale(0.2)',
          },
        },
        'confetti-fall-4': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(100vh) translateX(-100px) rotate(-360deg) scale(0.2)',
          },
        },
        'confetti-fall-5': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(100vh) translateX(40px) rotate(540deg) scale(0.2)',
          },
        },
      },
      animation: {
        // ... (keep all previous animations)
        'confetti-fall-1': 'confetti-fall-1 4.5s ease-in forwards',
        'confetti-fall-2': 'confetti-fall-2 4.8s ease-in forwards',
        'confetti-fall-3': 'confetti-fall-3 4.2s ease-in forwards',
        'confetti-fall-4': 'confetti-fall-4 5s ease-in forwards',
        'confetti-fall-5': 'confetti-fall-5 4.5s ease-in forwards',
      },
    },
  },
  plugins: [],
}
