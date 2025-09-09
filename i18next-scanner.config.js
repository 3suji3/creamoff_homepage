export default {
  input: ["src/**/*.{js,jsx}"],
  output: "./src/locales/$LOCALE/translation.json",
  options: {
    removeUnusedKeys: true,
    lngs: ["ko", "en"],
    ns: ["translation"],
    defaultLng: "ko",
    defaultNs: "translation",
    nsSeparator: ":",
    keySeparator: ".",
  },
};
