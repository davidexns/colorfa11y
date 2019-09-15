import { calculateContrast } from '../contrast-calculator'

describe('calculateContrast', () => {
  test('should calculate the color contrast', () => {
    const white = { r: 255, g: 255, b: 255 }
    const blue = { r: 0, g: 0, b: 255 }

    const result = calculateContrast(white, blue)

    expect(result.toFixed(3)).toEqual('8.592')
  })

  test('should calculate the same color contrast when colors are swapped', () => {
    const white = { r: 255, g: 255, b: 255 }
    const blue = { r: 0, g: 0, b: 255 }

    const result = calculateContrast(blue, white)

    expect(result.toFixed(3)).toEqual('8.592')
  })
})
