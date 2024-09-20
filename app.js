const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routes
const indexrouter = require("./routes/indexrouter");
const newMsgRouter = require("./routes/newMessageRouter");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexrouter);
app.use("/new", newMsgRouter);


const PORT = 3000;
app.listen(PORT, () => console.log(`Port ${PORT}!`));