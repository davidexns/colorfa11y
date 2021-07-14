<script lang="ts">
	import ColorSet from '$lib/components/ColorSet.svelte';
	import ContrastLevel from '$lib/components/ContrastLevel.svelte';
	import Section from '$lib/components/Section.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { convertFromHex, convertFromHsl, convertFromRgb } from '$lib/utils/color-converter';
	import { calculateContrast } from '$lib/utils/contrast-calculator';

	let background: ColorSetType = {
		h: 0,
		s: 0,
		l: 100,
		r: 255,
		g: 255,
		b: 255,
		hex: 'FFFFFF'
	};
	let foreground: ColorSetType = {
		h: 0,
		s: 0,
		l: 0,
		r: 0,
		g: 0,
		b: 0,
		hex: '000000'
	};

	let contrast: number;
	$: contrast = calculateContrast(foreground, background);

	function getUpdatedColors(key: string, val: ColorFieldInput, obj: ColorSetType): ColorSetType {
		if (val === '') {
			obj[key] = val;
			return obj;
		}

		switch (key) {
			case 'h':
			case 's':
			case 'l': {
				obj[key] = Number(val);
				const { h, s, l } = obj;
				const { rgb, hex } = convertFromHsl({ h, s, l });
				return { ...obj, ...rgb, hex };
			}
			case 'r':
			case 'g':
			case 'b': {
				obj[key] = Number(val);
				const { r, g, b } = obj;
				const { hsl, hex } = convertFromRgb({ r, g, b });
				return { ...obj, ...hsl, hex };
			}
			default: {
				const hex = String(val);
				if (hex.length > 0 && hex.length % 3 === 0) {
					const { hsl, rgb } = convertFromHex(hex);
					return { ...rgb, ...hsl, hex };
				} else {
					return { ...obj, hex };
				}
			}
		}
	}

	function updateForegroundColors(key: string, val: ColorFieldInput): void {
		foreground = getUpdatedColors(key, val, foreground);
	}

	function updateBackgroundColors(key: string, val: ColorFieldInput): void {
		background = getUpdatedColors(key, val, background);
	}
</script>

<SEO title="Color Utility" />

<h2>Color-fully! Match colors that support an accessible web.</h2>

<Section header="Select Colors">
	<ColorSet
		header="Foreground"
		colors={foreground}
		setIdentifier="foreground"
		updateColor={updateForegroundColors}
	/>
	<ColorSet
		header="Background"
		colors={background}
		setIdentifier="background"
		updateColor={updateBackgroundColors}
	/>
</Section>

<Section header="Contrast Ratio">
	<p class="ratio" data-testid="contrast-ratio">{contrast.toFixed(3)}</p>
	<div class="ratio-row">
		<ContrastLevel level="AA" {contrast} />
		<ContrastLevel level="AAA" {contrast} textMin={7} largeTextMin={4.5} />
	</div>
</Section>

<Section header="Preview">
	<div
		class="sample-container"
		style={`background: rgb(${background.r}, ${background.g}, ${background.b});`}
		data-testid="color-preview"
	>
		<p
			class="sample-text-large"
			style={`color: rgb(${foreground.r}, ${foreground.g}, ${foreground.b});`}
		>
			Sample large text here
		</p>
		<p class="sample-text" style={`color: rgb(${foreground.r}, ${foreground.g}, ${foreground.b});`}>
			Sample smaller text here
		</p>
	</div>
</Section>

<style lang="scss">
	h2 {
		font-size: 1.2rem;
		font-weight: 500;
		text-align: center;
		padding: 12px 24px;
		margin: 0 auto 16px;
		border-left: 3px solid var(--decorative-brackets);
		border-right: 3px solid var(--decorative-brackets);
		border-radius: 12px;
	}

	.sample-container {
		padding: 16px;
		border: 2px solid var(--preview-border);
		border-radius: 8px;
	}

	.sample-text {
		font-size: 16px;

		&-large {
			font-size: 24px;
			font-weight: 700;
		}
	}

	.ratio {
		font-size: 48px;
		font-weight: 500;
		text-align: center;
		margin: 24px 0;

		&-row {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
