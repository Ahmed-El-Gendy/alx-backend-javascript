const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentRecords = lines.slice(1);

    if (studentRecords.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const fieldData = {};

    studentRecords.forEach((record) => {
      const fields = record.split(',');

      if (fields.length === 4) {
        const firstname = fields[0];
        const field = fields[3];

        if (!fieldData[field]) {
          fieldData[field] = [];
        }

        fieldData[field].push(firstname);
      }
    });

    const totalStudents = studentRecords.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(fieldData)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
