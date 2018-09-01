const fs = require("fs");

const removeFields = obj =>
  Object.keys(obj)
    .filter(key => obj[key])
    .map(key => ({ [key]: obj[key] }))
    .reduce(Object.assign);

const findStudent = id => getStudents().find(student => student.id == id);

const getStudents = () => JSON.parse(fs.readFileSync("students.json"));

const createStudent = student => {
  const students = getStudents();
  const id = Math.max(...getStudents().map(s => s.id)) + 1;
  const newStudent = {
    id,
    ...student
  };
  const data = JSON.stringify([...students, newStudent], null, 4);
  fs.writeFileSync("students.json", data);
};

const updateStudent = (id, updated) => {
  const students = getStudents();
  const student = findStudent(id);
  const newStudent = {
    ...student,
    ...removeFields(updated)
  };
  if (!student) return;
  const newArr = students.map(e => (e.id === id ? newStudent : e));
  const data = JSON.stringify(newArr, null, 4);
  fs.writeFileSync("students.json", data);
  return student;
};

const deleteStudent = id => {
  const students = getStudents();
  const newArr = students.filter(e => e.id !== id);
  const data = JSON.stringify(newArr, null, 4);
  fs.writeFileSync("students.json", data);
};
module.exports = {
  findStudent,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
};
