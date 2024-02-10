module.exports = {
	root: true,
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
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
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
	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
}
