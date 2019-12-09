const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    res.render("index")
})

server.get("/portfolio", function(req, res) {
    res.render("portfolio")
})

server.listen(5000, function() {
    console.log("Server is running")
})