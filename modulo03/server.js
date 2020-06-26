const express = require ('express')
const nunjucks = require ('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get ("/", function (req, res) {
    return res.render("courses")
})

server.get ("/about", function (req, res) {
     const about = {
        logo_url: "https://rocketseat.com.br/static/images/logo-rocketseat.svg",
        name: "Rocketseat",
        description: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo',
        technologies: [
            { name: "Javascript"},
            { name: "NodeJS"},
            { name: "React"},
            { name: "React-Native"}
        ],
        links: [
            { name: "Github", url: "https://github.com/Rocketseat/"},
            { name: "Instagram", url: "http://instagram.com/rocketseat_oficial"},
            { name: "Facebook", url: "http://fb.com/rocketseat"}
        ]
    }
    return res.render("about", {about})
})

server.listen(5000, function () {
    console.log("Server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});