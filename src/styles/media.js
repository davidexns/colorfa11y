import { css } from 'styled-components'

const sizes = {
  desktopWide: 1824,
  desktop: 1024,
  tablet: 768,
  phone: 480,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
