const { duration } = require("@material-ui/core");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
            }
        },
    },
    variants: {},
    plugins: [],
}
