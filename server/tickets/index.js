const { Router } = require("express");
const { getAllTicketsAction } = require("./controller.js");

const router = Router();

router.get("/", getAllTicketsAction);

module.exports = { router };
