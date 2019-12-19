const encodeText = (text: string) => {
    return text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
}

export { encodeText };