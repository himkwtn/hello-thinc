const { Router } = require("express");
const studentsRouter = require("./students");
const helloRouter = require("./hello");
const router = Router();
router.use("/students", studentsRouter);
router.use("/hello", helloRouter);
module.exports = router;
