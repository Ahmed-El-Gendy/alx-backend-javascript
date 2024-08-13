export default function cleanSet(s, str) {
  if (!str || !s || !(s instanceof Set) || !(typeof str === 'string')) {
    return '';
  }
  const ch = [];
  for (const c of s.values()) {
    if (c.startsWith(str) && typeof c === 'string') {
      if (c.substring(str.length) !== c) {
        ch.push(c.substring(str.length));
      }
    }
  }
  return ch.join('-');
}
