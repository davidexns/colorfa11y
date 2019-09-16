export function getTextColor(passStatus) {
  return passStatus ? 'hsl(133, 42%, 24%)' : 'hsl(358, 58%, 32%)'
}

export function getBackgroundColor(passStatus) {
  return passStatus ? 'hsl(133, 62%, 88%)' : 'hsl(358, 66%, 90%)'
}
