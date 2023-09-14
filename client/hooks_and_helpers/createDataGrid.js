const data = [
  { id: 1, Ticket_Status: "In Progress", Ticket_Notes: "No text entered" },
  { id: 2, Ticket_Status: "In Progress", Ticket_Notes: "133333333333333" },
  { id: 3, Ticket_Status: "In Progress", Ticket_Notes: "222222222222222" },
];

const fieldName = Object.keys(data[0]);

// data.map((ticket, index) => {
//   fieldName.push(ticket.Object.keys());
// });
// const [colName] = [Object.keys(data)];

// console.log(JSON.stringify(colName, null, 2));
console.log(fieldName);
