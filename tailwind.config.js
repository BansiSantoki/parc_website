export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F6FAFD',
          100: '#EAF7FF',
          200: '#CFE9FA',
          300: '#9BD0F2',
          400: '#4E9CDB',
          500: '#1675C5',
          600: '#125E9F',
          700: '#123A6B',
          800: '#0D2B50',
          900: '#081C36',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FFF3C4',
          300: '#FFE27A',
          500: '#FFD21F',
          600: '#E0B300',
          700: '#9A7A00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        panel: '24px',
      },
      boxShadow: {
        soft: '0 4px 24px -10px rgba(18, 58, 107, 0.16)',
        lift: '0 20px 44px -20px rgba(18, 58, 107, 0.30)',
        ring: '0 0 0 1px rgba(18, 58, 107, 0.06)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
