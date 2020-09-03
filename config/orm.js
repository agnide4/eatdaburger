const connection = require("./connection")

function createQmarks(num){
    let arr = []
    for (i = 0; i<num; i++){
        arr.push(" ? ")
    }
    return arr.toString();
}

function translateSQL(obj){
    let arr = []
    for (let key in obj){
        let value = obj[key];
        if(Object.hasOwnProperty.call(obj, key)){
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
        let dbQuery = "SELECT * FROM " + table + ";" ;
        connection.query(dbQuery, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })
    },

    insert: function(table, col, val, cb){
        console.log(val, table, col)
        let dbQuery =   
        "INSERT INTO " +
        table + 
        " (" 
        + col.toString() + 
        ") " +
        "VALUES (" +  
        createQmarks(val.length) 
        +") ";
        console.log(dbQuery)

        connection.query(dbQuery, val, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })

    },

    update: function(table, colVal, condition, cb){
        let dbQuery = "UPDATE " + table + 
                      " SET " + translateSQL(colVal) + 
                      " WHERE " + condition

        connection.query(dbQuery, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })
            
    },

    delete: function(table, condition, cb){
        let dbQuery = "DELETE FROM " + table + " WHERE " + condition
        connection.query(dbQuery, (err, res)=>{
            if(err){
                throw err;
            }
            cb(res);
        })
        
    }
}

module.exports = orm;