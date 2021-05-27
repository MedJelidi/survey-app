const Router = require("express").Router()
const Question = require("../models/question")

Router.get("", async (req, res) => {
    console.log(req.body);
    try {
        const questions = await Question.find();
        return res.status(200).send(questions);
    } catch (err) {
        return res.send(err);
    }
})

module.exports = Router
