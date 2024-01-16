module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},
	settings: {
		react: {
			version: "17",
		},
	},
	plugins: ["react", "prettier"],
	rules: {},
	overrides: [
		{
			files: ["*.jsx", "*.tsx"],
			parser: "@typescript-eslint/parser",
			extends: [
				"plugin:@typescript-eslint/recommended",
				"prettier/@typescript-eslint",
			],
			plugins: ["@typescript-eslint"],
			rules: {},
		},
		{
			files: ["vite.config.js"],
			env: {
				node: true,
			},
		},
	],
};
