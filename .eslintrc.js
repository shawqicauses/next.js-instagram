// DONE REVIEWING: GITHUB COMMIT ⚠️
const eslintConfig = {
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": "error",
    "no-console": "error",
    "no-empty-function": "error",
    "no-nested-ternary": "off",
    "no-param-reassign": "error",
    "no-return-await": "off",
    "no-undef": "off",
    "no-underscore-dangle": "error",
    "no-unsafe-negation": "error",
    "no-unused-vars": ["error", {argsIgnorePattern: "request|response|next"}],
    "object-shorthand": "off",
    "prefer-arrow-callback": "off",
    "prefer-destructuring": "error",
    "import/extensions": ["error", {ts: "never", tsx: "never"}],
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": ["error", {extensions: [".ts", ".tsx"]}],
    "react/jsx-fragments": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  }
}

module.exports = eslintConfig
