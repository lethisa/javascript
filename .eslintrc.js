module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0,
    "indent": 0,
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "single",
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
