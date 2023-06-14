const express = require("express");
const app = express();

const studentRoute = require("./routes/student");
app.use("/student", studentRoute);

app.listen(9000, () => {
  console.log("Server listening at 9000");
});
