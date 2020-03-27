const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 1000;

const app = express();

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'myjs123',
	database: 'guest-list-sql-db'
});

connection.connect(function(err){
	(err) ? console.log(err): console.log(connection);
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`);
});

