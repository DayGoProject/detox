/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "amber-accent": "#D97706",
        "amber-dark": "#B45309",
        "off-white": "#F9FAFB",
        "ink-black": "#111827",
        "stone-gray": "#4B5563",
        "border-gray": "#E5E7EB",

        "primary": "#D97706",
        "background-light": "#f6f8f7",
        "background-dark": "#0f0f0f",
        "surface-dark": "#171717",
      },
      fontFamily: {
        "display": ["Space Grotesk", "Plus Jakarta Sans", "DM Sans", "sans-serif"],
        "body": ["Inter", "DM Sans", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0px", "sm": "2px", "md": "4px", "lg": "0px", "xl": "0px", "2xl": "0px", "full": "9999px" },
      boxShadow: {
        'kinetic': '4px 4px 0px 0px #111827',
        'kinetic-sm': '2px 2px 0px 0px #111827',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
