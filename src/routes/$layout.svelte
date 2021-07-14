<script>
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.scss';

	let selectedTheme = 'light';

	onMount(() => {
		selectedTheme = window.__theme || 'light';
	});

	function toggleTheme() {
		const newTheme = window.__theme === 'light' ? 'dark' : 'light';
		window.__setPreferredTheme(newTheme);
		selectedTheme = newTheme;
	}

	export let segment;
</script>

<Nav {segment} />

<main>
	<slot />
</main>

<button class="theme-toggle" on:click={toggleTheme}>
	Go {selectedTheme === 'dark' ? 'Light' : 'Dark'}
</button>

<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: 992px;
		padding: 0 16px 24px;
	}

	button.theme-toggle {
		position: fixed;
		right: 16px;
		bottom: 16px;
		margin: 0;
		border: none;
		color: var(--primary-text);
		background: var(--theme-button-background);
		padding: 4px 8px;
		border-radius: 4px;
	}
</style>
