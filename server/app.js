const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { createWriteStream } = require("fs");
const { router: ticketRouter } = require("./tickets/index.js");
// const { getDirectoryName } = require("./helpers/filePathHelper.js");

const app = express();

//=====================================
//Allowing Static Files
//======================================

// const __dirname = await getDirectoryName(import.meta.url);

app.use(express.static(path.join(__dirname, "..", "public")));

//=====================================
//   Logs Server Access Requests
//======================================

const accessLogStream = createWriteStream("access.log", { flags: "a" });

app.use(
  morgan("common", {
    immediate: true,
    stream: accessLogStream,
  })
);

//=====================================
//   Body Parse included in Express
//======================================

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//=====================================
//   Mounted Routers and Default Route
//======================================

app.use("/tickets", ticketRouter);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

module.exports = app;
