import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		clearMocks: true,
		environment: 'jsdom',
		exclude: ['node_modules/**/*', 'tests/*'],
		globals: true,
		setupFiles: ['src/setupTest.js'],
	},
})
