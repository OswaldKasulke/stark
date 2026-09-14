// Ratgebertexte und Antworten dürfen Links in der Form [Linktext](/pfad/) oder
// [Linktext](https://…) enthalten. Im HTML werden daraus Links, im JSON-LD bleibt Text.
export const linkMuster = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export const ohneLinks = (text: string) => text.replace(linkMuster, "$1");

export type Textteil = { text: string; href?: string };

export function zerlege(text: string): Textteil[] {
  const teile: Textteil[] = [];
  let pos = 0;
  for (const m of text.matchAll(linkMuster)) {
    const start = m.index ?? 0;
    if (start > pos) teile.push({ text: text.slice(pos, start) });
    teile.push({ text: m[1], href: m[2] });
    pos = start + m[0].length;
  }
  if (pos < text.length) teile.push({ text: text.slice(pos) });
  return teile;
}
