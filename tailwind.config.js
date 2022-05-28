module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    }},
  plugins: [],
}
