<script lang="ts">
	export let title: string
</script>

<style>
	fieldset {
		display: inline-block;
		border: none;
		border-top: 1px solid var(--kebab-border);
		margin-bottom: 0;
	}

	fieldset:not(:last-child) {
		margin-right: 16px;
	}

	legend {
		padding: 4px 8px;
		color: var(--supplemental-text);
		font-size: 18px;
		width: auto;
		text-align: center;
	}

	.input-container {
		display: flex;
		border: 2px solid var(--input-border);
		border-radius: 6px;
		padding: 6px;
		background-color: var(--input-background);
		margin-bottom: 0;
	}
</style>

<fieldset>
	<legend>{title}</legend>
	<div class="input-container">
		<slot />
	</div>
</fieldset>
