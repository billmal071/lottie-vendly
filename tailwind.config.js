module.exports = {
  mode: "jit",
  prefix: "tw-",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          1: "#82ECD3",
          2: "#006E72",
          3: "#E0FAF8",
          4: "#00D0BE",
          5: "#007575",
          6: "#C6F6F2",
          7: "#68E3D9",
          8: "#C6F6F4",
        },
        black: {
          1: "#000000",
          2: "#003333",
        },
        sand: "#EDC9AF",
      },
    },
  },
  plugins: [],
};
