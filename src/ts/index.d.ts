/* eslint-disable @typescript-eslint/no-unused-vars */
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

type ColorSetType = Rgb & Hsl & { hex: string }
