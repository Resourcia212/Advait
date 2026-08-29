/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        advait: {
          blue: {
            DEFAULT: '#0757C9',
            light: '#2570DE',
            dark: '#054299',
            soft: '#EAF5FF',
            50: '#F0F7FF',
            100: '#EAF5FF',
            200: '#D0E6FD',
            500: '#0757C9',
            600: '#0546A3',
            700: '#082B63',
          },
          navy: {
            DEFAULT: '#082B63',
            deep: '#051D44',
            light: '#0E3D8B',
          },
          teal: {
            DEFAULT: '#079F9A',
            light: '#0EBAB4',
            dark: '#057A76',
            soft: '#E6F8F7',
          },
          green: {
            DEFAULT: '#75C914',
            light: '#8DE028',
            dark: '#5B9F0E',
            soft: '#F2FCE8',
          },
          bg: '#F8FBFF',
          border: '#DCE7F3',
          text: {
            primary: '#14213D',
            secondary: '#64748B',
            muted: '#94A3B8',
          }
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(7, 87, 201, 0.07), 0 4px 6px -2px rgba(7, 87, 201, 0.03)',
        'card': '0 10px 30px -5px rgba(8, 43, 99, 0.06), 0 4px 6px -2px rgba(8, 43, 99, 0.02)',
        'elevated': '0 20px 40px -10px rgba(7, 87, 201, 0.12), 0 8px 16px -4px rgba(7, 87, 201, 0.04)',
        'glow': '0 0 25px rgba(7, 159, 154, 0.25)',
        'glow-blue': '0 0 30px rgba(7, 87, 201, 0.22)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
