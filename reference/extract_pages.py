"""Extract readable UTF-8 content from the supplied Apple Pages IWA archive."""
import pathlib
import re
import sys

sys.path.insert(0, '/tmp/pages-extractor')
from cramjam import snappy

root = pathlib.Path('/app/reference/pages-extracted/Index')
sections = []
for source in [root / 'Document.iwa', *sorted((root / 'Tables').glob('DataList*.iwa'))]:
    raw = source.read_bytes()
    offset = 0
    chunks = []
    while offset < len(raw):
        chunk_type = raw[offset]
        size = int.from_bytes(raw[offset + 1:offset + 4], 'little')
        assert chunk_type == 0, (source, chunk_type)
        chunks.append(bytes(snappy.decompress_raw(raw[offset + 4:offset + 4 + size])))
        offset += 4 + size
    unpacked = b''.join(chunks)
    source.with_suffix('.unpacked').write_bytes(unpacked)
    decoded = unpacked.decode('utf-8', errors='replace')
    spans = re.findall(r'[^\x00-\x08\x0b-\x1f\x7f\ufffd]{8,}', decoded)
    if spans:
        sections.append(f'--- {source.name} ---\n' + '\n'.join(spans))
output = pathlib.Path('/app/reference/extracted-content.txt')
output.write_text('\n\n'.join(sections), encoding='utf-8')
print(output)
