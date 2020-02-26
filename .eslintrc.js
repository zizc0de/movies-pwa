module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "class-methods-use-this": 0,
    "func-names": [2, "as-needed" ],
    "arrow-parens": ["error", "always"],
    "max-len": ["error", { "code": 160 }],
    "import/prefer-default-export": ["off"],
    "no-param-reassign": [2, { "props": false }],
    "import/no-extraneous-dependencies": ["error", {"peerDependencies": true}],
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    "no-shadow": ["error", { "allow": ["state", "getters"] }],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "minProperties": 5,
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "minProperties": 5,
          "multiline": true,
          "consistent": true
        },
        "ImportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ExportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        }
      }
    ],
  },
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
};
