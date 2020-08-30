const connection = require("./connection")

function createQmarks(num){
    let arr = []
    for (i = 0; i<arr.length; i++){
        arr.push("?")
    }
    return arr.toString();
}

function translateSQL(obj){
    let arr = []
    for (let key in obj){
        let value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'"
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString()
}

const orm = {
    findAll: function(table, cb){
        let dbQuery = "SELECT * FROM" + table + ";" ;
        connection.query(dbQuery, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })
    },

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

    },

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
            
    },

    delete: function(table, condition, cb){
        let dbQuery = "DELETE FROM" + table + "WHERE" + condition
        connection.query(dbQuery, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })
        
    }
}