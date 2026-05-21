import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06101f",
        panel: "#0b1526",
        line: "rgba(148, 163, 184, 0.18)",
        signal: "#22d3ee",
        cobalt: "#60a5fa",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(34, 211, 238, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
