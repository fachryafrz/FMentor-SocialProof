/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-dark-magenta": "hsl(300, 43%, 22%)",
        "primary-soft-pink": "hsl(333, 80%, 67%)",
        "neutral-light-grayish-magenta": "hsl(303, 10%, 53%)",
        "neutral-dark-grayish-magenta": "hsl(300, 24%, 96%)",
      },
      fontFamily: {
        "league-spartan": ["'League Spartan'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
