const router = require("express").Router()
const Response = require("../models/response")
const _ = require("lodash");

router.post("", async (req, res) => {
    let response = new Response(_.pick(req.body, "response"));
    try {
        response = await response.save();
        return res.status(200).send(response);
    } catch (err) {
        return res.status(500).send(err);
    }
});

module.exports = router
