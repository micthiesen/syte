module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.html", "./public/**/*.html"],
    defaultExtractor: (content) => [
      ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
      ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
    ],
    enabled: process.env.NODE_ENV === "production",
  },
  theme: {},
  variants: {},
  plugins: [],
};
