const mediaQuery = breakpoint => `@media (min-width: ${breakpoint}px)`

const media = {
  custom: mediaQuery,
  desktopWide: mediaQuery(1824),
  desktop: mediaQuery(1024),
  tablet: mediaQuery(768),
  phone: mediaQuery(480),
}

export default media
