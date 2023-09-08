import { connectDatabase } from "./db_connnection.js";


export async function getAllTickets() {
    const query = 'SELECT * FROM tickets'
    const db = await connectDatabase();
    const [tickets] = await db.query(query);
    return tickets;
};