export default function createInt8TypedArray(length, position, value) {
  if (position > length || position < 0) {
    throw (new Error('Position outside range'));
  }
  const buffer = new ArrayBuffer(length);
  const date = new DataView(buffer);
  date.setInt8(position, value);
  return date;
}
