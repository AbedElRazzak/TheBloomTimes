/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#4D4D4D',
          400: '#020202',
        },
        secondary: {
          50: '#FAFCFE',
          100: '#F5FBFF',
          200: '#F6FBFF',
          300: '#F2F7FB',
          400: '#DDE2E5',
        },
        accent: {
          green: "#06C680",
          red: "#FF1A30",
        },
    },
      fontSize: {
        h1xl: "82.6px",
        h1: "68.8px",
        h2: "47.8px",
        h3: "39.8px",
        h4: "33.2px",
        h5: "27.6px",
        h6: "19.2px",
        p1: "19.2px",
        p2: "16px",
        p3: "13.3px"
      },
      fontFamily: {
        lora: ['Lora', 'serif']
      },
      backgroundImage: {
        'TheBloomTime-logo': "url('https://raw.githubusercontent.com/AbedElRazzak/TheBloomTimesCDN/main/uploads/TheBloomTimes-logo.png')"
      }
    },
  },
  plugins: [],
}

