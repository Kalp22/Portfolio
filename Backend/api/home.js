const express = require("express");
const router = express.Router();

require("dotenv").config();

const aboutSchema = require("./aboutSchema");
const subTitleSchema = require("./subTitleSchema");
const projectsSchema = require("./projectSchema.js");

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_ADD_HOMEPAGE);

router.get("/", async (req, res) => {
  try {
    const tagsData = await subTitleSchema.find();

    const aboutParasData = await aboutSchema.find();

    const projectData = await projectsSchema.find();

    res.status(200).json({
      status: true,
      aboutParas: aboutParasData,
      tags: tagsData,
      projects: projectData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
