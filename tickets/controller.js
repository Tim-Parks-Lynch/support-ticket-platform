import { getAllTickets } from "./model.js";
import { dirname } from 'path';
import { fileURLToPath } from "url";


export async function getAllTicketsAction(req, res){
    try {
        const tickets = await getAllTickets();
        res.render(`${dirname(fileURLToPath(import.meta.url))}/views/getAllTickets`, {
            tickets,
        });
    } catch (error) {
        throw error
    };
};