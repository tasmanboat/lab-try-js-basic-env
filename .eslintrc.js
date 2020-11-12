module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": "off", // or inline use as such: // eslint-disable-line no-unused-vars

        // // when using eslint-config-airbnb as "extends":[ 'airbnb' ]
        // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // "react/jsx-one-expression-per-line": "off",
        // "no-multiple-empty-lines": "off",
    },
};
