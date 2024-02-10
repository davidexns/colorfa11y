module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:svelte/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'testing-library'],
	rules: {
		'no-undef': ['off'],
		'@typescript-eslint/no-inferrable-types': ['off'],
	},
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['**/*.test.js'],
			extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/dom'],
			rules: {
				'testing-library/prefer-presence-queries': ['error'],
			},
		},
		{
			files: ['tests/**/*'],
			env: {
				node: true,
			},
			extends: ['plugin:playwright/playwright-test'],
		},
	],
	settings: {
		'svelte3/typescript': require('typescript'),
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
}
