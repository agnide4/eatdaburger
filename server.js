const express = require("express")
const bodyParser  =require("body-parser")
const exphbrs = require("express-handlebars")

//using app variable to set up express
const app = express()

//setting up port
const PORT = process.env.PORT || 3000;


//setting up static file
app.use(express.static("public"))


//connecting to body parser element
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())



//Setting up handlebars 
app.engine("handlebars", exphbrs({defaultLayout: "main"}))
app.set("view engine", "handlebars")


//Setting up routes
let routes = ("./controllers/burgers_controller.js")
app.use(routes)


app.listen(PORT, function(){
    console.log("Listening on: http://localhost:" + PORT)
})