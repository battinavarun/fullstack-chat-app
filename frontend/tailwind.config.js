import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // ✅ Needed for Vite or Create React App
    "./src/**/*.{js,ts,jsx,tsx}",   // ✅ All component files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        buddimode: {
          "primary": "#ec4899",         // bright pink
          "primary-content": "#ffffff",
          "secondary": "#f9a8d4",       // light pink
          "accent": "#f472b6",          // hot pink
          "neutral": "#fce7f3",         // very light pink/neutral
          "base-100": "#fff1f2",        // very light background
          "base-200": "#fbcfe8",
          "base-300": "#f9a8d4",
          "info": "#d946ef",
          "success": "#10b981",
          "warning": "#facc15",
          "error": "#f43f5e",
        },
        lavender: {
          "primary": "#B497BD",         // Soft lavender
          "primary-content": "#ffffff", // Text on primary backgrounds
          "secondary": "#D8BFD8",       // Thistle (pastel lavender)
          "secondary-content": "#3D3B4F",
          "accent": "#A678B4",          // Deeper lavender accent
          "accent-content": "#ffffff",
          "neutral": "#5D576B",         // Muted plum/gray-lavender
          "neutral-content": "#ffffff",
          "base-100": "#F8F4FF",        // Very light lavender background
          "base-200": "#E9E3F8",
          "base-300": "#D9D0EB",
          "info": "#B8C0FF",            // Soft blue for info
          "success": "#A3E4D7",         // Minty soft green
          "warning": "#FFE59E",         // Pale yellow
          "error": "#F6A6B2",           // Muted soft red/pink
        },

        darkchat: {
          "primary": "#D33B65",             // Your bubble color
          "primary-content": "#ffffff",
          "secondary": "#2B2B40",           // Friend bubble color
          "secondary-content": "#EDEDED",
          "base-100": "#b83b3b",            // Chat background
        }




      },

    ],
  },
};
