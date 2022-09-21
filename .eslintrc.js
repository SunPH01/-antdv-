const isProd = process.env.NODE_ENV === "production";
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": isProd ? "warn" : "off",
    "no-debugger": isProd ? "warn" : "off",
    "linebreak-style": "off",
    "no-undef": "off",
    "no-empty": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-setup-props-destructure": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
      },
    ],
  },
};
