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
        // Table config
        table: "200px 200px repeat(6, minmax(0, 1fr) )",
      },
    },
  },
  plugins: [],
};
