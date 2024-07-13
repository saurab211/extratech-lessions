/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        slate:{
          50:'#F8FAFC',
          300:'#CFD9E3',
          400:'#9EB2CC'
        },
        blue:{
          300:'#45b4ef',
          400:'#16A1EB',
          900:'#001024'
        }
      }
    },
    
  },
  plugins: [],
}
