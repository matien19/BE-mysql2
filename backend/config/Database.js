import mysql from "mysql2";

const db = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db",
  })
  .promise();

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Database connected successfully!");
});

module.exports = db;
