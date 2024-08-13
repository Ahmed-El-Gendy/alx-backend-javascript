export default function cleanSet(s, str) {
  if (!(s instanceof Set) || typeof str !== 'string') {
    return '';
  }
  const ch = [];
  for (const c of s.values()) {
    if (typeof c === 'string' && c.startsWith(str)) {
      const val = c.substring(str.length);
      if (val) {
        ch.push(val);
      }
    }
  }
  return ch.join('-');
}
