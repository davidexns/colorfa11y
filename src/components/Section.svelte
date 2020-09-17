<script lang="ts">
	export let header: string
</script>

<style>
	section {
		margin-bottom: 32px;
	}

	header {
		position: relative;
		text-align: center;
		margin-bottom: 16px;
	}

	h2 {
		display: flex;
		align-items: center;
		position: relative;
		font-size: 24px;
		font-weight: 400;
		text-decoration: none;
		color: var(--section-header-text);
		margin: 0;
	}

	h2:after,
	h2:before {
		content: '';
		border-top: 1px solid var(--kebab-border);
		flex: 1;
		margin: 0 12px 0 0;
	}

	h2:after {
		margin: 0 0 0 12px;
	}
</style>

<section>
	<header>
		<h2>{header}</h2>
	</header>
	<slot />
</section>
