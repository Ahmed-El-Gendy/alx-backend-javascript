export default function getStudentsByLocation(students) {
  let sum = 0;
  if (!(students instanceof Array)) {
    return sum;
  }
  sum = students.reduce((acc, students) => (acc + students.id), 0);
  return sum;
}
