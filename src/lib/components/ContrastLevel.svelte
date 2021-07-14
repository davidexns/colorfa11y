<script lang="ts">
	import ContrastItem from './ContrastItem.svelte';

	export let contrast: number;
	export let graphicalMin: number = 3.0;
	export let largeTextMin: number = 3.0;
	export let level: string;
	export let textMin: number = 4.5;
</script>

<section data-testid={`${level}-compliance`}>
	<header>
		<h3>{level} Compliance</h3>
	</header>
	<div class="content">
		<ContrastItem
			label="Normal text"
			{contrast}
			min={textMin}
			subtext={`Greater than ${textMin}`}
		/>
		<ContrastItem
			label="Large text"
			{contrast}
			min={largeTextMin}
			subtext={`Greater than ${largeTextMin}`}
		/>
		<ContrastItem
			label="Graphical objects"
			{contrast}
			min={graphicalMin}
			subtext={`Greater than ${graphicalMin}`}
		/>
	</div>
</section>

<style lang="scss">
	section {
		flex: 1;
		margin: 8px;
		background: var(--card-background);
		border-radius: 8px;
		border: 1px solid var(--card-border);
		min-width: 360px;
	}

	header {
		display: flex;
		align-items: center;
		border-bottom: 1px solid var(--card-border);
		padding: 16px 12px 12px;
	}

	h3 {
		font-size: 22px;
		font-weight: 500;
		margin: 0;
		margin-left: 8px;
	}

	div.content {
		padding: 0px 16px 8px;
	}
</style>
