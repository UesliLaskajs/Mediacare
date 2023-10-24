const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

// Enable CORS for specific origin and methods
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", authRoute);

require("../server/config/mongoose.config");
require("../server/routes/Doctor.routes")(app);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
