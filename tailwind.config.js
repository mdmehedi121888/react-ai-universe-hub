/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#8cea4d",
      
"secondary": "#6177c6",
      
"accent": "#eb6df2",
      
"neutral": "#15191e",
      
"base-100": "#e9e0eb",
      
"info": "#3594d0",
      
"success": "#7fe6b9",
      
"warning": "#8e6b0b",
      
"error": "#f90b4b",
      },
    },
  ],
  plugins: [require("daisyui")],
}

