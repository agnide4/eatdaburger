var sql = require("mysql")
require("dotenv").config()
require("../server")

connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.SQL_SECRET,
    database: "burger_db"

});

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    
    }
    console.log("Connected as Id : " + connection.threadid);

})

module.exports = connection;