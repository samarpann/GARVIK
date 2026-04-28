const fs = require('fs');
const xml = fs.readFileSync('d:/office/garvik/GarvikChangesContent/word/document.xml', 'utf8');
let output = [];

const paragraphs = xml.split(/<\/w:p>/);
paragraphs.forEach(p => {
    const tMatches = p.match(/<w:t(?: [^>]+)?>([^<]+)<\/w:t>/g);
    if (tMatches) {
        const pText = tMatches.map(m => m.replace(/<w:t(?: [^>]+)?>/g, '').replace(/<\/w:t>/g, '')).join('');
        if (pText.trim()) output.push(pText);
    }
});
fs.writeFileSync('d:/office/garvik/extracted_utf8.txt', output.join('\n'), 'utf8');
