const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const session = require("express-session")



//set Session all
app.use(session({
    secret: "hitface-haui"
}))



require("../libs/mongo-db")

// set path static
app.use(express.static(path.join(__dirname, "..", "public")))


//Using body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


//set views ejs
app.set("views", path.join(__dirname, "..", "apps", "views"))
app.set("view engine", "ejs")

//set route with web or api
//app.use("/api", require("../routers/api"))
app.use("/", require("../routers/web"))

module.exports = app