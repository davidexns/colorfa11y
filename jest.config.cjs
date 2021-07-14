module.exports = {
	clearMocks: true,
	collectCoverageFrom: ['src/**/*.{js,ts,svelte}'],
	coveragePathIgnorePatterns: ['/node_modules/', 'src/ts/'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	testPathIgnorePatterns: ['node_modules', 'cypress'],
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true,
			},
		],
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts$': 'ts-jest',
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
}
