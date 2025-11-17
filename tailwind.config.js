/** @type {import(''tailwindcss'').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f23",
        secondary: "#1a1a2e",
        accent: {
          blue: "#00d9ff",
          purple: "#8b5cf6",
          pink: "#ec4899"
        }
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"]
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        glow: "glow 2s ease-in-out infinite alternate"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00d9ff" },
          "100%": { boxShadow: "0 0 20px #00d9ff, 0 0 30px #00d9ff" }
        }
      }
    }
  },
  plugins: []
};
