import js from "@eslint/js";

export default [
  {
    ignores: [
      "node_modules/**",
      "aws/**",
      "dist/**"
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        process: "readonly",
        console: "readonly"   // 👈 ADD THIS
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  }
];
