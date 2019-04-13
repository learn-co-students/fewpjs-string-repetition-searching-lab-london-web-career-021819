// Code your solution here

function heyJude () {
  let heyJude = 'Na na na na na na na, na na na na, hey Jude.'
  return heyJude.repeat(16)
}

function prohibitedLanguage (str) {
  let badNames = /candycorn|brusselssprouts/
  return str.search(badNames)
}
