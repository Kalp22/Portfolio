const { default: mongoose } = require("mongoose");

const projectScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    sourceLink: { 
        type: String,
        required: true,
    },
    projectLink: { 
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Project", projectScheme)