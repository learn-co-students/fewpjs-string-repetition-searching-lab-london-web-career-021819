// Code your solution here

function heyJude() {
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16)
}

function prohibitedLanguage(string) {
  let bannedWords = /brusselssprouts|candycorn/
  return string.search(bannedWords)
}
