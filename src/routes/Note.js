const express = require('express')
const router = express.Router()

const Note = require('../models/note')

router.post("/list", async function (req, resp) {
    var notes = await Note.find({userid:req.body.userid})
    resp.json(notes)
})
router.post("/save", async function (req, resp) {
    await Note.deleteOne({id:req.body.id})
    var newNote = new Note({
        id:req.body.id,
        userid:req.body.userid,
        title:req.body.title,
        content:req.body.content,
    })
    await newNote.save()
    const response = {message:"new note created!" + `id:${req.body.id}`}
    resp.json(response)
})

router.post("/delete", async function (req, resp) {
    await Note.deleteOne({id:req.body.id})
    const response = {message:"delete note is" + `id: ${req.body.id}`}
    resp.json(response)
})

module.exports = router;