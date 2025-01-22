export const text2html = (text) => {
    if(!text) return '';
    text = text.replaceAll('\n', '<br/>')
    return text;
}
