const nana = "Na na na na na na na, na na na na, hey Jude."
const heyJude = _ => nana.repeat(16)

const re = /candycorn|brusselssprouts/
const prohibitedLanguage = word => word.search(re)