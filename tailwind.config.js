const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.html", "./src/public/**/*.html"],
    defaultExtractor: (content) => [
      ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
      ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
    ],
    enabled: isProduction,
  },
  variants: {},
  plugins: [],
};
