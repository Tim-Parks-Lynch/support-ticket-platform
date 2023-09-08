import 'dotenv/config';
import mysql from 'mysql2/promise';


export async function connectDatabase() {
    try {

        const connection = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        });

        return connection;
        
    } catch(err) {
        throw err;
    };
};
