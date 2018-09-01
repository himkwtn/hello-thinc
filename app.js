const morgan = require("morgan");
const app = require("express")();
const router = require("./routes/index");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
app.set("json spaces", 2);
app.use(morgan("dev"));
app.use("/api", router);
