import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1e1e2e",
        white: "#eff1f5",
      },
    },
  },
  plugins: [],
} satisfies Config;
