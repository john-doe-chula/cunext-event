module.exports = {
  content: ["./App.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F1F1F1",
        "gradient-start": "#FD297B",
        "gradient-middle": "#FF5864",
        "gradient-end": "#FF655B",
      },
      linearGradientColors: {
        'custom-gradient': ['#FD297B', '#FF5864', '#FF655B'],
      },
    },
  },
  plugins: [],
};