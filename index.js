// Code your solution here

function heyJude (verse) {
    return verse.repeat(16)
}

function prohibitedLanguage (string) {
    const words = /candycorn|brusselssprouts/;
    return string.search(words)
}