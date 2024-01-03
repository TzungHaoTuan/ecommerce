import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c084fc",
          secondary: "#0369a1",
          accent: "#00b9ba",
          neutral: "#1f2937",
          "base-100": "#fff6ff",
          info: "#00d3ff",
          success: "#008c64",
          warning: "#ffad00",
          error: "#ff6983",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
}
export default config
