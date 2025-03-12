import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Make sure this includes your app's files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
