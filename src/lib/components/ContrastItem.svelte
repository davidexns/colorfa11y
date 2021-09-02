<script lang="ts">
	import ContrastStatus from './ContrastStatus.svelte'

	export let contrast: number
	export let label: string
	export let min: number
	export let subtext: string = undefined
</script>

<div class="wrapper" data-testid="contrast-item">
	<div class="label-container">
		<p class="label">{label}</p>
		{#if subtext}
			<p class="subtext" data-testid="contrast-subtext">{subtext}</p>
		{/if}
	</div>

	<ContrastStatus isPass={contrast >= min} />
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		margin: 8px 0;
	}

	.label {
		font-size: 18px;
		font-weight: 500;
		margin: 0;
		color: var(--primary-text);
	}

	.subtext {
		font-size: 16px;
		font-weight: 400;
		margin: 0;
		color: var(--supplemental-text);
	}

	.label-container {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
</style>
