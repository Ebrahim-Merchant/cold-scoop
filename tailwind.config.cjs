/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
      },
      height: {
        '768': '768px',
      }
  },
  plugins: [],
}};
