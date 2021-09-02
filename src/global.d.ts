/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

export declare global {
	interface Window {
		__theme: string
		__setPreferredTheme: (newTheme: string) => void
	}
}
