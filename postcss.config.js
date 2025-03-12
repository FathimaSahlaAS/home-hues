const config = {
  plugins: [
    require('tailwindcss')({ config: './tailwind.config.ts' }), // Tailwind with TS config
    require('autoprefixer'), // Autoprefixer
    require('@tailwindcss/postcss'), // Ensure this is in your plugins
  ],
};

module.exports = config;

