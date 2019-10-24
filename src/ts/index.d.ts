type Hsl = {
  h: number
  s: number
  l: number
}

type Rgb = {
  r: number
  g: number
  b: number
}

type ColorFieldInput = number | string

type ColorSet = Rgb & Hsl & { hex: string }
