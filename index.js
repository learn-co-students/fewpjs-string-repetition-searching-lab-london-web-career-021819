const heyJude = () => {
  const lyric = "Na na na na na na na, na na na na, hey Jude."
  return lyric.repeat(16)
}

function prohibitedLanguage (string) {
  const regexp = /candycorn|brusselssprouts/
  return string.search(regexp)
}
