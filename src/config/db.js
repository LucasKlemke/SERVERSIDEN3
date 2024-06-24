import mysql from "mysql2";
import 'dotenv/config'

// const dbConfig = {
//   //localhost
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   //root
//   user: process.env.USER_DB,
//   password: process.env.PASSWORD,
// };

const dbConfig = {
  //localhost
  host: process.env.HOST,
  database: process.env.DATABASE,
  //root
  user: process.env.USER_DB
};

// const dbConfig = {
//   //localhost
//   host: 'localhost',
//   database: 'n3ss',
//   //root
//   user: 'root'
// };

const db = mysql.createConnection(dbConfig);

export default db
// db.query("select * from pet", (err, result) => {
//     if(err) throw err
//     console.log(result)
// })