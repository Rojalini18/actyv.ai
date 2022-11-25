const express = require("express");

const router = express.Router();

const Register = require("../models/register.model");

router.post("", async function (req, res) {
  try {
    const data = await Register.create(req.body);
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async function (req, res) {
  try {
    const data = await Register.find().lean().exec();
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("", async function (req, res) {
  try {
    const data = await Register.deleteMany();
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
