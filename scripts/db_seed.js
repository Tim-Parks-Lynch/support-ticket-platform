import 'dotenv/config'
import mysql from 'mysql2/promise';
import fs from 'fs/promises';


export async function seedDatabase() {
    try {
        
        const seedQueryData = await fs.readFile("tickets/models/scripts/seed.sql", {
             encoding: 'utf8' 
        });

        const connection = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.SEEDDATABASE,
            multipleStatements: true,
        });
        await connection.connect();
        await connection.query(seedQueryData);
    } catch(err) {
        throw err;
    };
};
