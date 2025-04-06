/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '24px',
      screens: {
        '2xl': '1840px', 
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1770px',
    },
    extend: {
      boxShadow: {
        'text-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        custom: "-11px 4px 5px 0px rgba(0,0,0,0.03)",
      },
      backgroundImage: {
        'gradient-custom': "linear-gradient(44deg, #F4F4F4 28.43%, #C393E3 104.84%)",
      },
      colors: {
        primaryBlack: "#141414",
        primaryWhite: "#FFF",
        primaryOrange: "#FF735B"
      },
      fontFamily: {
        BebasNeue: ["Bebas Neue", "serif"],
        
      },
    },
  },
  plugins: [],
}