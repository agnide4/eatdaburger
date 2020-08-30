const connection = require("./connection")

const orm = {
    findAll: function(table, cb){
        let dbQuery = "SELECT * FROM" + table + ";" ;
        connection.query(dbQuery, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })
    }

    insertOne: function(table, col, val, cb){
        let dbQuery =   
        "INSERT INTO" 
        + table + 
        "(" + col.toString() + ")" +
        "VALUES (" + createQmarks(valc.length) + ")";
        console.log(dbQuery)

        connection.query(dbQuery, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })

    }

    updateOne: function(table, colVal, condition, cb){
        let dbQuery = "UPDATE" + table + 
                      "SET" + translateSQL(colVal) + 
                      "WHERE" + condition

        connection.query(dbQuery, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })
            
    }
}