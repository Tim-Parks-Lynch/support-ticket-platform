import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";
import { router as ticketRouter } from "../tickets/index.js";
import { seedDatabase } from "../scripts/db_seed.js";

const app = express();

//=====================================
//   Allowing Pug Template Engine
//======================================
// Changes default template engine
// from express to pug. Allowing
// render method on response obj
// which renders templates

app.set("view engine", "pug");

//=====================================
//Allowing Static Files
//======================================

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));

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

app.use(express.urlencoded({ extended: false }));

//=====================================
//   Mounted Routers and Default Route
//======================================

app.use("/tickets", ticketRouter);

app.get("/", (req, res) => res.redirect("/tickets"));

//=====================================
//   Starts Up Web Server on Specified Port
//======================================

app.listen(8080, () => {
  // only needed when in dev
  // seedDatabase();
  console.log(`Server is listening on http://localhost:8080`);
});
