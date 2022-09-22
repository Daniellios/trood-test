/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sold: "#BD1FBE",
        "got-free": "#FC64FF",
        burned: "#50F513",
        "free-float": "#7A7A7A",
      },
      gridTemplateColumns: {
        //repeat(8, minmax(0, 1fr))
        // Complex site-specific column configuration
        table:
          "200px 200px minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
