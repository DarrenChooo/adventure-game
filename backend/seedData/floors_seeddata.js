/* Include to use .env file */
const express = require('express');

const app = express();
const format = require('pg-format');

app.listen(3000, function () {
  const dotenv = require('dotenv');
  dotenv.config()

  const fs = require("fs");
  const {Pool} = require("pg");
  const fastcsv = require("fast-csv");

  const stream = fs.createReadStream("./seedData/floors.csv");
  const csvData = [];
  const csvStream = fastcsv
    .parse()
    .on("data", function(data) {
      csvData.push(data);
    })
    .on("end", function() {
      // remove the first line: header
      csvData.shift();

      // create a new connection to the database
      const pool = new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD
      });

      // Using pg format for bulk inserts
      const query = format(
        `INSERT INTO floors (floorname, imageid) VALUES %L`, 
      csvData);

      pool.connect((err, client, done) => {
        if (err) throw err;

        try {
          client.query(query, [], (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log(`inserted ${  res.rowCount  } rows`);
            }
          });
        } finally {
          done();
        }
      });
    });

  stream.pipe(csvStream);
});

