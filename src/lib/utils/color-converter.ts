export function convertFromHsl(hsl: Hsl): { rgb: Rgb; hex: string } {
	const rgb: Rgb = hslToRgb(hsl)

	return { rgb, hex: rgbToHex(rgb) }
}

export function convertFromRgb(rgb: Rgb): { hsl: Hsl; hex: string } {
	return { hsl: rgbToHsl(rgb), hex: rgbToHex(rgb) }
}

export function convertFromHex(hex: string): { rgb: Rgb; hsl: Hsl } {
	const rgb = hexToRgb(hex)

	return { rgb, hsl: rgbToHsl(rgb) }
}

/**
 * Formula and code from:
 * https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-6
 */
function hslToRgb({ h, s, l }: Hsl): Rgb {
	s /= 100
	l /= 100

	const c = (1 - Math.abs(2 * l - 1)) * s
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
	const m = l - c / 2
	let r = 0,
		g = 0,
		b = 0

	if (0 <= h && h < 60) {
		r = c
		g = x
		b = 0
	} else if (60 <= h && h < 120) {
		r = x
		g = c
		b = 0
	} else if (120 <= h && h < 180) {
		r = 0
		g = c
		b = x
	} else if (180 <= h && h < 240) {
		r = 0
		g = x
		b = c
	} else if (240 <= h && h < 300) {
		r = x
		g = 0
		b = c
	} else if (300 <= h && h < 360) {
		r = c
		g = 0
		b = x
	}
	r = Math.round((r + m) * 255)
	g = Math.round((g + m) * 255)
	b = Math.round((b + m) * 255)

	return { r, g, b }
}

/**
 * Formula and code from:
 * https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-4
 */
function rgbToHsl({ r, g, b }: Rgb): Hsl {
	// Make r, g, and b fractions of 1
	r /= 255
	g /= 255
	b /= 255

	// Find greatest and smallest channel values
	const cmin = Math.min(r, g, b)
	const cmax = Math.max(r, g, b)
	const delta = cmax - cmin
	let h = 0,
		s = 0,
		l = 0

	// Calculate hue
	// No difference
	if (delta == 0) h = 0
	// Red is max
	else if (cmax == r) h = ((g - b) / delta) % 6
	// Green is max
	else if (cmax == g) h = (b - r) / delta + 2
	// Blue is max
	else h = (r - g) / delta + 4

	h = Math.round(h * 60)

	if (h < 0) h += 360
	l = (cmax + cmin) / 2
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

	s = Math.round(+(s * 100).toFixed(1))
	l = Math.round(+(l * 100).toFixed(1))
	return { h, s, l }
}

function rgbToHex({ r, g, b }: Rgb): string {
	return `${padHex(r)}${padHex(g)}${padHex(b)}`
}

function padHex(val: number) {
	return val.toString(16).padStart(2, '0')
}

/**
 * Formula and code from:
 * https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-2
 */
function hexToRgb(hex: string): Rgb {
	let r: string, g: string, b: string

	// 3 digits
	if (hex.length === 3) {
		r = '0x' + hex[0] + hex[0]
		g = '0x' + hex[1] + hex[1]
		b = '0x' + hex[2] + hex[2]

		// 6 digits
	} else if (hex.length === 6) {
		r = '0x' + hex[0] + hex[1]
		g = '0x' + hex[2] + hex[3]
		b = '0x' + hex[4] + hex[5]
	}
	return { r: +r, g: +g, b: +b }
}
