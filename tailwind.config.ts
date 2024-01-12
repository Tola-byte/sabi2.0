import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': "url('../public/icons/background.svg')",
      },

      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sora: ["Sora", "sans-serif"]
      },

      colors: {
        colorone: "#FCECEC",
        colortwo: "#B9E3E1"
      }
     
    },
    
  },
  plugins: [],
}
export default config
