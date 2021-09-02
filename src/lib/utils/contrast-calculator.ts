function calculateLuminance({ r, g, b }: Rgb): number {
	const multipliers = [0.2126, 0.7152, 0.0722]
	return [r, g, b].reduce((acc: number, cur: number, idx: number) => {
		cur /= 255
		const srgb = cur <= 0.03928 ? cur / 12.92 : Math.pow((cur + 0.055) / 1.055, 2.4)
		return acc + srgb * multipliers[idx]
	}, 0)
}

export function calculateContrast(color1: Rgb, color2: Rgb): number {
	const l1: number = calculateLuminance(color1) + 0.05
	const l2: number = calculateLuminance(color2) + 0.05
	return Math.max(l1, l2) / Math.min(l1, l2)
}
