<script lang="ts">
	import ColorField from './ColorField.svelte';
	import ColorFieldset from './ColorFieldset.svelte';

	export let header: string;
	export let colors: ColorSetType;
	export let updateColor: (key: string, val: ColorFieldInput) => void;
	export let setIdentifier: string;

	$: ({ h, s, l, r, g, b, hex } = colors);
</script>

<form on:submit|preventDefault data-testid={`${header}-form`}>
	<h3>{header}</h3>
	<div class="wrapper">
		<ColorFieldset title="HSL">
			<ColorField
				identifier={`${setIdentifier}-hue`}
				label="Hue"
				value={h}
				min={0}
				max={360}
				updateColor={(val) => updateColor('h', val)}
			/>
			<ColorField
				identifier={`${setIdentifier}-saturation`}
				label="Saturation"
				value={s}
				min={0}
				max={100}
				suffix="%"
				updateColor={(val) => updateColor('s', val)}
			/>
			<ColorField
				identifier={`${setIdentifier}-lightness`}
				label="Lightness"
				value={l}
				min={0}
				max={100}
				suffix="%"
				updateColor={(val) => updateColor('l', val)}
			/>
		</ColorFieldset>

		<ColorFieldset title="RGB">
			<ColorField
				identifier={`${setIdentifier}-red`}
				label="Red"
				value={r}
				min={0}
				max={255}
				updateColor={(val) => updateColor('r', val)}
			/>
			<ColorField
				identifier={`${setIdentifier}-green`}
				label="Green"
				value={g}
				min={0}
				max={255}
				updateColor={(val) => updateColor('g', val)}
			/>
			<ColorField
				identifier={`${setIdentifier}-blue`}
				label="Blue"
				value={b}
				min={0}
				max={255}
				updateColor={(val) => updateColor('b', val)}
			/>
		</ColorFieldset>

		<ColorFieldset title="HEX">
			<ColorField
				identifier={`${setIdentifier}-hex`}
				label="Hex"
				value={hex}
				updateColor={(val) => updateColor('hex', val)}
				prefix="#"
				size={8}
				isHex
			/>
		</ColorFieldset>
	</div>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;

		&:not(:last-child) {
			margin-bottom: 1.45rem;
		}
	}

	h3 {
		display: inline-block;
		margin-bottom: 0;
		margin-right: auto;
		margin-bottom: 16px;
	}

	.wrapper {
		display: flex;
		flex-wrap: wrap;
	}

	@media only screen and (min-width: 1024px) {
		form {
			flex-direction: row;
			align-items: center;
		}

		h3 {
			margin-bottom: 0;
			margin-top: 1.45rem;
		}
	}
</style>
