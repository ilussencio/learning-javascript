/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {
      colors:{
        primary: {
          100: "#a6d4fa",
          200: "#90caf9",
          300: "#648dae",
        },
        secondary: {
          100: "#f6a5c0",
          200: "#f48fb1",
          300: "#f48fb1",
        },
        error: {
          100: "#e57373",
          200: "#e57373",
          300: "#e57373",
        },
        success:{
          100: "#81c784",
          200: "#4caf50",
          300: "#388e3c"
        }
      },
    },
  },
  plugins: [],
}

