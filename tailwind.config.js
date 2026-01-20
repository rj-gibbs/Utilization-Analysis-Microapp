module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FF6BCE",
          blue: "#4DB7FF",
          yellow: "#FFE066",
          mint: "#6FFFE9"
        }
      }
    }
  },
  plugins: []
};