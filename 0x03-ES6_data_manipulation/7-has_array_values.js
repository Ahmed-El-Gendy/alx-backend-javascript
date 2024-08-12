export default function hasValuesFromArray(s, arr) {
  const newS = new Set(s);
  const newArrS = new Set(arr);
  const inter = newS.intersection(newArrS);
  return newArrS.size === inter.size;
}
