/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        neon: {
          400: '#00ff7f',
          500: '#00ff99',
        },
        dark: '#1a1a1a',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': `${theme('colors.neon.400')} ${theme('colors.dark')}`,
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.neon.400'),
          borderRadius: '10px',
          border: `2px solid ${theme('colors.dark')}`,
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme('colors.neon.500'),
        },
        '.scrollbar::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.dark'),
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
