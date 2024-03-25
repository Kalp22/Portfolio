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
    const tagsData = await subTitleSchema.find().exec();

    const aboutParasData = await aboutSchema.find().exec();

    const projectData = await projectsSchema.find().sort({ _id: -1 }).exec();

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
