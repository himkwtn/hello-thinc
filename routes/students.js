const {
  getStudents,
  findStudent,
  createStudent,
  updateStudent,
  deleteStudent
} = require("../functions");
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  const students = getStudents();
  res.send(students);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const student = findStudent(id);
  res.send(student);
});

router.get("/delete", (req, res) => {
  const id = req.query.id;
  const studentToDelete = deleteStudent(id);
  res.send(studentToDelete);
});

router.post("/create", (req, res) => {
  res.send();
});

router.post("/update", (req, res) => {
  res.send();
});

const newStudent = {
  name: "asd",
  contact: {
    phone: 1234,
    email: "asd@asd.com",
    line: "abbcd"
  },
  courses: ["asas", "adasd", "dsdsds"]
};

module.exports = router;
