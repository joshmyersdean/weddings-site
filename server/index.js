const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
connection.connect();

app.use(cors());

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

app.get('/test', (req, res) => {
  const { table } = req.query;

  pool.query(`select * from guests`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});


//route for insert data
app.post('/guest',(req, res) => {
	//let data = {name: req.body.name, guest: req.body.guest, camp: req.body.camp, diet: req.body.diet};
    	  let ins = `INSERT INTO ?? (??, ??, ??, ??) VALUES (?,?,?,?)`;
	  let sql = mysql.format(ins, ["guests", "name", "guest", "camp", "diet",req.body.name, req.body.guest, req.body.camp, req.body.diet])
    	  pool.query(sql, (err, results) => {
    	          if(err) {
    	              return res.send(err + req.body.guest);
    	          } else {
    	    	  return res.send(results);
    	          }
    	});
});
