const { getAllTickets } = require("./model.js");

async function getAllTicketsAction(req, res) {
  try {
    const tickets = await getAllTickets();
    res.json(tickets);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllTicketsAction,
};
