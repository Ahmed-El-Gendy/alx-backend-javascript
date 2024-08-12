export default function getStudentsByLocation(arr, city) {
  let newArr = [];
  if (!(arr instanceof Array)) {
    return newArr;
  }
  newArr = arr.filter((ob) => ob.location === city);
  return newArr;
}
