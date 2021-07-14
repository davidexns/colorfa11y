module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
	],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{
			files: ['**/*.test.js'],
			env: {
				'jest/globals': true,
			},
			extends: [
				'plugin:jest/recommended',
				'plugin:jest-dom/recommended',
				'plugin:testing-library/recommended',
			],
			rules: {
				'testing-library/prefer-presence-queries': ['error'],
			},
		},
		{
			files: ['cypress/**/*'],
			env: {
				node: true,
			},
			extends: ['plugin:cypress/recommended'],
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
