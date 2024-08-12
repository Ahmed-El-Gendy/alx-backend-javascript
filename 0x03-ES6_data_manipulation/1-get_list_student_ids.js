export default function getListStudentIds(arr) {
  const newArr = [];
  if (!(arr instanceof Array)) {
    return newArr;
  }
  for (const element of arr) {
    newArr.push(element.id);
  }
  return newArr;
}
