<script lang="ts">
	export let title: string
</script>

<svelte:head>
	{#if !!title}
		<title>{title} | Colorfa11y</title>
	{/if}
</svelte:head>
