const IS_DARK_THEME = 'isDarkTheme'

export function getLocalTheme() {
  if (window !== undefined)
    return JSON.parse(localStorage.getItem(IS_DARK_THEME))

  return false
}

export function setLocalTheme(bool) {
  if (window !== undefined) localStorage.setItem(IS_DARK_THEME, bool)
}
