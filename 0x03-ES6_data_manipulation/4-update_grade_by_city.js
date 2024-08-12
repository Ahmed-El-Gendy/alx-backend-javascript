export default function getStudentsByLocation(students, city, newGrades) {
  const newGradesObj = newGrades.reduce((acc, { studentId, grade }) => {
    acc[studentId] = { grade };
    return acc;
  }, {});
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: newGradesObj[student.id] ? newGradesObj[student.id].grade : 'N/A',
    }));
}
