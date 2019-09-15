export function convertFromHsl(hsl) {
  const rgb = hslToRgb(hsl)

  return { rgb, hex: rgbToHex(rgb) }
}

export function convertFromRgb(rgb) {
  return { hsl: rgbToHsl(rgb), hex: rgbToHex(rgb) }
}

export function convertFromHex(hex) {
  const rgb = hexToRgb(hex)

  return { rgb, hsl: rgbToHsl(rgb) }
}

function hslToRgb({ h, s, l }) {
  s /= 100
  l /= 100

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
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

function rgbToHsl({ r, g, b }) {
  // Make r, g, and b fractions of 1
  r /= 255
  g /= 255
  b /= 255

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
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

  // Make negative hues positive behind 360°
  if (h < 0) h += 360

  // Calculate lightness
  l = (cmax + cmin) / 2

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  // Multiply l and s by 100
  s = Math.round(+(s * 100).toFixed(1))
  l = Math.round(+(l * 100).toFixed(1))
  return { h, s, l }
}

function rgbToHex({ r, g, b }) {
  return `${padHex(r)}${padHex(g)}${padHex(b)}`
}

function padHex(val) {
  return val.toString(16).padStart(2, '0')
}

function hexToRgb(hex) {
  let r = 0,
    g = 0,
    b = 0

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
