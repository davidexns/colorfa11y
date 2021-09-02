import { convertFromHsl, convertFromRgb, convertFromHex } from '../color-converter'

describe('color-converter util', () => {
	describe('convertFromHsl', () => {
		it('should return valid RGB and HEX', () => {
			const result = convertFromHsl({ h: 210, s: 46, l: 54 })

			expect(result.rgb).toEqual({ r: 84, g: 138, b: 192 })
			expect(result.hex).toEqual('548ac0')
		})

		it('should correctly convert a red color', () => {
			const result = convertFromHsl({ h: 344, s: 50, l: 50 })

			expect(result.rgb).toEqual({ r: 191, g: 64, b: 98 })
			expect(result.hex).toEqual('bf4062')
		})

		it('should correctly convert a purple color', () => {
			const result = convertFromHsl({ h: 268, s: 50, l: 50 })

			expect(result.rgb).toEqual({ r: 123, g: 64, b: 191 })
			expect(result.hex).toEqual('7b40bf')
		})

		it('should correctly convert a green color', () => {
			const result = convertFromHsl({ h: 133, s: 50, l: 50 })

			expect(result.rgb).toEqual({ r: 64, g: 191, b: 91 })
			expect(result.hex).toEqual('40bf5b')
		})

		it('should correctly convert a yellow-green color', () => {
			const result = convertFromHsl({ h: 72, s: 50, l: 50 })

			expect(result.rgb).toEqual({ r: 166, g: 191, b: 64 })
			expect(result.hex).toEqual('a6bf40')
		})

		it('should correctly convert an orange color', () => {
			const result = convertFromHsl({ h: 36, s: 50, l: 50 })

			expect(result.rgb).toEqual({ r: 191, g: 140, b: 64 })
			expect(result.hex).toEqual('bf8c40')
		})
	})

	describe('convertFromRgb', () => {
		it('should return valid HSL and HEX', () => {
			const result = convertFromRgb({ r: 198, g: 54, b: 37 })

			expect(result.hsl).toEqual({ h: 6, s: 69, l: 46 })
			expect(result.hex).toEqual('c63625')
		})

		it('should handle a green-based color correctly', () => {
			const result = convertFromRgb({ r: 25, g: 255, b: 37 })

			expect(result.hsl).toEqual({ h: 123, s: 100, l: 55 })
			expect(result.hex).toEqual('19ff25')
		})

		it('should handle a blue-based color correctly', () => {
			const result = convertFromRgb({ r: 25, g: 25, b: 255 })

			expect(result.hsl).toEqual({ h: 240, s: 100, l: 55 })
			expect(result.hex).toEqual('1919ff')
		})

		it('should correctly handle color with RGB of the same values', () => {
			const result = convertFromRgb({ r: 123, g: 123, b: 123 })

			expect(result.hsl).toEqual({ h: 0, s: 0, l: 48 })
			expect(result.hex).toEqual('7b7b7b')
		})
	})

	it('convertFromHex should return valid HSL and RGB', () => {
		const result = convertFromHex('c63625')

		expect(result.rgb).toEqual({ r: 198, g: 54, b: 37 })
		expect(result.hsl).toEqual({ h: 6, s: 69, l: 46 })
	})

	it('convertFromHex should return valid HSL and RGB with 3-character hex value', () => {
		const result = convertFromHex('c6c')

		expect(result.rgb).toEqual({ r: 204, g: 102, b: 204 })
		expect(result.hsl).toEqual({ h: 300, s: 50, l: 60 })
	})
})
