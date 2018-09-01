const { Router } = require("express");
const studentsRouter = require("./students");

const router = Router();
router.use("/students", studentsRouter);
module.exports = router;
