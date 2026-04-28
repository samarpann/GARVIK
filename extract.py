import xml.etree.ElementTree as ET

path = r"d:\office\garvik\GarvikChangesContent\word\document.xml"
tree = ET.parse(path)
root = tree.getroot()

namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
texts = []
for p in root.findall('.//w:p', namespace):
    p_text = "".join([t.text for t in p.findall('.//w:t', namespace) if t.text])
    if p_text.strip():
        texts.append(p_text)

print("\n".join(texts))
