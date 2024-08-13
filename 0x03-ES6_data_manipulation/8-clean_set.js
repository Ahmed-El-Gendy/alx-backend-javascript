export default function cleanSet(s, str) {
  if (!str || !s || !(s instanceof Set) || !(typeof str === 'string')) {
    return '';
  }
  const ch = [];
  for (const c of s.values()) {
    if (c.startsWith(str) && typeof c === 'string') {
      const val = c.substring(str.length);
      if (val !== c && val) {
        ch.push(val);
      }
    }
  }
  return ch.join('-');
}
