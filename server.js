const express = require("express")
const nunjucks = require("nunjucks")

const articles = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/13842365?s=460&v=4",
        name: "Marcelo Galdino",
        role: "Desenvolvedor web full stack",
        description: 'Desenvolvedor web focado em aprender novas tecnologias e se tornar um full stack. Stack escolhida -> HTML, CSS, Javascript, React, React Native, Node.js. Acesse o meu <a href="https://github.com/marcelogaldino" target="_blank">Github</a>',
        links: [
            {url: "https://github.com/marcelogaldino/", name: "Github"},
            {url: "https://twitter.com/oficialmarcelog/", name: "Twitter"},
            {url: "https://www.linkedin.com/in/marcelogaldino/", name: "Linkedin"}
        ]
    }

    res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
    res.render("portfolio", { items: articles })
})

server.get("/article", function(req, res) {
    const id = req.query.id

    const article = articles.find(function(article) {
        return article.link == id

    })

    if (!article) {
        return res.send("Article not found!")
    }
    
    res.render("article", { item: article })
})

server.listen(5000, function() {
    console.log("Server is running")
})