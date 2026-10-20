#!/usr/bin/env python3
"""Prüft den vollständigen Export auf entfernte Markenbezüge und kaputte lokale Assets."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote, urlsplit
import re, sys
root = Path(sys.argv[1] if len(sys.argv) > 1 else 'out')
errors = set()
for path in root.rglob('*'):
    if path.suffix in {'.html', '.js', '.css', '.json', '.txt', '.xml', '.svg'}:
        text = path.read_text(errors='replace')
        if re.search(r'evernest|images\.ctfassets\.net|Lizenzpartner|Lizenznehmer', text, re.I):
            errors.add(f'{path}: entfernter Markenbezug im Export')
class Assets(HTMLParser):
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        urls = []
        if tag in {'img','script'} and attrs.get('src'): urls.append(attrs['src'])
        if tag == 'link' and attrs.get('rel') in {'stylesheet','icon','preload'} and attrs.get('href'): urls.append(attrs['href'])
        if tag == 'a' and attrs.get('href','').startswith('/') and not attrs['href'].startswith('//'): urls.append(attrs['href'])
        for url in urls:
            u = urlsplit(url)
            if u.netloc or not u.path.startswith('/'): continue
            target = root / unquote(u.path).lstrip('/')
            if not (target.is_file() or (target/'index.html').is_file() or target.with_suffix('.html').is_file()):
                errors.add(f'{page.relative_to(root)}: lokales Ziel fehlt: {u.path}')
for page in root.rglob('*.html'):
    Assets().feed(page.read_text())
if errors:
    print('\n'.join(sorted(errors)))
    sys.exit(1)
print(f'{len(list(root.rglob("*.html")))} HTML-Seiten: keine Markenbezüge, keine fehlenden lokalen Link- oder Bildziele.')
