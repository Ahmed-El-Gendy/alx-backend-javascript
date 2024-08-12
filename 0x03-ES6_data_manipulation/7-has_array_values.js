export default function hasValuesFromArray(s, arr) {
  const ch = arr.every((el) => s.has(el));
  return ch;
}
