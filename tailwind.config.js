/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        sand: '#EDE8E0',
        sage: {
          50: '#F0F5F1',
          100: '#D4E0D7',
          200: '#A8C5AE',
          DEFAULT: '#7C9A82',
          600: '#5B7B62',
          700: '#4A6550',
        },
        taupe: {
          100: '#E8D5CB',
          DEFAULT: '#B8A394',
          600: '#9A8577',
        },
        charcoal: '#2D2A26',
        'warm-gray': {
          300: '#B5AFAA',
          DEFAULT: '#6B6560',
          700: '#4D4844',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
