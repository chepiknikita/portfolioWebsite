/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Spectral"],
        lora: ["Lora", "serif"],
        manrope: ["Manrope", "serif"],
      },
      colors: {
        brand: {
          brown: "#665133",
        },
      },
    },
  },
  plugins: [],
};
