module.exports = {
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0) rotate(0.0deg)" },
          "15%": { transform: "translateX(-5px) rotate(14.0deg)" },
          "30%": { transform: "translateX(5px) rotate(-8.0deg)" },
          "40%": { transform: "translateX(-5px) rotate(14.0deg)" },
          "50%": { transform: "translateX(5px) rotate(-4.0deg)" },
          "60%": { transform: "translateX(-5px) rotate(10.0deg)" },
          "70%": { transform: "translateX(5px) rotate(0.0deg)" },
          "100%": { transform: "translateX(0) rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 2s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
