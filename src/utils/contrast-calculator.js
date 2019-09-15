function calculateLuminance({ r, g, b }) {
  const multipliers = [0.2126, 0.7152, 0.0722]
  return [r, g, b].reduce((acc, cur, idx) => {
    cur /= 255
    let srgb =
      cur <= 0.03928 ? cur / 12.92 : Math.pow((cur + 0.055) / 1.055, 2.4)
    return acc + srgb * multipliers[idx]
  }, 0)
}

export function calculateContrast(color1, color2) {
  const l1 = calculateLuminance(color1) + 0.05
  const l2 = calculateLuminance(color2) + 0.05
  return Math.max(l1, l2) / Math.min(l1, l2)
}
