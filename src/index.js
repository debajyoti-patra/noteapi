const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Note = require('./models/note')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://debajyotipatra:Deba123@cluster0.hsgzuqx.mongodb.net/notesdb").then(function () {

    app.get("/", function (req, resp) {
        const response = {message:"API works"}
        resp.json(response)
    })
    const noteRouter = require('./routes/Note')
    app.use("/notes",noteRouter)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
    console.log("Server started at PORT: " + PORT)
})