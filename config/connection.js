var sql = require("mysql")

let connection;
if (process.env.JAWSDB_URL){
    connection = sql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = sql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.SQL_SECRET,
        database: "burger_db"
    
    });

}


connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    
    }
    console.log("Connected as Id : " + connection.threadid);

})

module.exports = connection;