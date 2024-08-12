export default function getListStudentIds(arr) {
  let newArr = [];
  if (!(arr instanceof Array)) {
    return newArr;
  }
  newArr = arr.map((item) => item.id);
  return newArr;
}
