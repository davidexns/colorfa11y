<script lang="ts">
	function handleChange(e: Event) {
		const newValue = (e.target as HTMLInputElement).value

		if ((Number(newValue) >= min && Number(newValue) <= max) || (isHex && newValue.length <= 6)) {
			updateColor(newValue)
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (isHex) return

		if (e.code === 'ArrowUp' && Number(value) < max) {
			e.preventDefault()
			updateColor(Number(value) + 1)
		} else if (e.code === 'ArrowDown' && Number(value) > min) {
			e.preventDefault()
			updateColor(Number(value) - 1)
		}
	}

	export let identifier: string
	export let label: string
	export let value: ColorFieldInput = ''
	export let updateColor: (val: ColorFieldInput) => void
	export let min: number = undefined
	export let max: number = undefined
	export let prefix: string = undefined
	export let suffix: string = undefined
	export let size: number = 4
	export let isHex: boolean = false
</script>

<div class="container">
	<label for={identifier}>{label}</label>
	{#if prefix}
		<span class="supplemental-text prefix" data-testid="color-prefix">{prefix}</span>
	{/if}
	<input
		type="text"
		id={identifier}
		data-testid="color-field"
		{value}
		{size}
		on:input={handleChange}
		on:keydown={handleKeyDown}
	/>
	{#if suffix}
		<span class="supplemental-text suffix" data-testid="color-suffix">{suffix}</span>
	{/if}
</div>

<style>
	.container {
		position: relative;
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.container:not(:last-of-type) {
		border-right: 1px solid var(--input-divider);
	}

	input {
		background: transparent;
		box-sizing: content-box;
		padding: 0 16px;
		font-size: 24px;
		color: var(--primary-text);
		text-align: center;
		text-transform: uppercase;
		outline: none;
		border: 0;
		border-bottom: 4px solid transparent;
		border-radius: inherit;
		transition: border-bottom-color 200ms ease-out;
	}

	input:focus {
		border-bottom-color: var(--focus-underline);
	}

	label {
		color: var(--input-inner-label);
		font-size: 14px;
		line-height: 22px;
	}

	.supplemental-text {
		position: absolute;
		bottom: 4px;
		font-size: 20px;
		color: var(--input-static-text);
	}

	.prefix {
		left: 8px;
	}

	.suffix {
		right: 8px;
	}
</style>
