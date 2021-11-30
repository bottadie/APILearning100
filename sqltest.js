//const { Connection, Request } = require("tedious");
import { json } from 'express';
import {Connection, Request} from 'tedious';

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "svccorteadminchap", // update me
      password: "Mader4.C0rt4chapa##" // update me
    },
    type: "default"
  },
  server: "cortechap.database.windows.net", // update me
  options: {
    database: "staging", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
  //  queryDatabase();
  }
});

connection.connect();

export async function queryDatabase() {
  console.log("Reading rows from the Table...");
  var result = []
  // Read all rows from table
  const  request =  new  Request(
    `SELECT TOP 1 AccountID,AccountName FROM Customers`,
    
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

   request.on("row", columns => {

    var obj = {};
    columns.forEach(column => {
      obj[column.metadata.colName.toLowerCase()] = column.value;
    });


  });
  connection.execSql(request);
  return await request;

}