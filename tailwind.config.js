const { duration } = require("@material-ui/core");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    glow: {
      styles: { // Defaults to these values
        default: baseColor =>
          `0 1px 3px 0 rgba(${baseColor}, 0.4), 0 1px 2px 0 rgba(${baseColor}, 0.24)`,
        md: baseColor =>
          `0 4px 6px -1px rgba(${baseColor}, 0.4), 0 2px 4px -1px rgba(${baseColor}, 0.24)`,
        lg: baseColor =>
          `0 10px 15px -3px rgba(${baseColor}, 0.4), 0 4px 6px -2px rgba(${baseColor}, 0.20)`,
        xl: baseColor =>
          `0 20px 25px -5px rgba(${baseColor}, 0.4), 0 10px 10px -5px rgba(${baseColor}, 0.16)`,
        "2xl": baseColor => `0 25px 50px -12px rgba(${baseColor}, 1)`,
        outline: baseColor => `0 0 0 3px rgba(${baseColor}, 0.5)`,
        none: "none"
      }
    },
    extend: {
      colors: {
        'cyan': '#6ADDF4',
      },
      skew: {
        '25': '25deg',
        '45': '45deg',
        '60': '60deg',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-1deg)'
          },
          '50%': {
            transform: 'rotate(1deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-glow")(),
  ],
}
