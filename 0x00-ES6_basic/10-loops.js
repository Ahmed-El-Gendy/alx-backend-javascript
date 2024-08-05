export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, arr] of array.entries()) {
    array[idx] = appendString + arr;
  }

  return array;
}
