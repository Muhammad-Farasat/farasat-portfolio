export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        orbitron: ["orbitron"],
        orbitronBlack: ["orbitron-black"],
        orbitronExtraBold: ["orbitron-extrabold"],
        orbitronBold: ["orbitron-bold"],
      }
    },
  },
  plugins: [],
}