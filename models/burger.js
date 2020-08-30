const orm = require("../config/orm")

let burger = {
    findAll: function(cb){
        orm.findAll("burgers", (res)=>{
            cb(res)
        })
    },

    insert: function(col, val, cb){
        orm.insert("burgers", col, val, (res)=>{
            cb(res)
        })
    },

    delete: function(condition, cb){
        orm.delete("burgers", condition, (res)=>{
            cb(res)
        })
    },

    update: function(val ,condition, cb){
        orm.update("burgers", val, condition, (res) => {
            cb(res)
        })
    }
}

module.exports = burger