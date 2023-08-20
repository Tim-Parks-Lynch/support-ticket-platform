import 'dotenv/config'
import { createServer } from 'http';
import mysql2 from 'mysql2'
import fs from 'fs'


const seedQueryData = fs.readFileSync("serv/models/scripts/seed.sql", {
    encoding: "utf-8",
})

const connection = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true,
})


connection.connect();

connection.query(seedQueryData, err => {
    if (err) {
        throw err
    }
})

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
  
connection.end();


// const server = createServer((request, response) => {
//     response.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
//     response.write('Hello ');
//     response.end(' World\n');
// });

const server = createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8'});

    const url = new URL(request.url, `http://localhost:8080`);

    const body = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title> Node.js Demo </title>
        </head>
        <body>
            <h1 style="color:green"> Hello ${url.searchParams.get('name')} </h1>
        </body>
        </html>`;

    response.end(body);
});

server.listen(8080, () => {
    console.log(
        `Server is listening to http://localhost:${server.address().port}`,
    );
});