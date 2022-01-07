const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptexam",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Succesful!!");
  await connection.endAsync();
}

async function addMsg(message) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `INSERT INTO message(data) values(?)`;
  await connection.queryAsync(sql, [message.data]);
  await connection.endAsync();
  console.log("Added successfully");
}

async function getMsg() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  return list;
}

module.exports = { addMsg, getMsg };

//getMsg();

//const message = {
//  data: "Hi",
//};
//addMsg(message);

//connectionCheck();
