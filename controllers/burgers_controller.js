const express = require("express")
const burger = require("../models/burger")

const router = express.Router()

//Build router connections here
router.get("/", (req, res) =>{
    burger.findAll(function(data){
        let handleBarsObject = {
            burgers: data
        }
        console.log(handleBarsObject)
        res.render("index", handleBarsObject);
    })

    
})

router.post("/api/burgers", (req, res) => {
    burger.insert(function(data){
        ["burgerName", "devoured"],
        [req.body.burgerName, req.body.devoured],
        function(result){
            res.json({id: result.insertid})
        }
        
    })
})

router.put("api/burgers/:id", function(req, res){
    let condition = "id =" + req.params.id;
    console.log("cond", condition)
    burger.update({devoured: req.body.devoured}, condition, function(result){
        if((result, changedRows ===0)){
            return res.status(404).end()
        }
        else{
            res.status(200).end()
        }
    })
})

router.delete("api/burgers/:id", function(req, res){
    let condition = "id =" + req.params.id;
    console.log("cond", condition)
    burger.delete({devoured: req.body.devoured}, condition, function(result){
        if((result, changedRows === 0)){
            return res.status(404).end()
        }
        else{
            res.status(200).end()
        }
    })
})


module.exports = router;