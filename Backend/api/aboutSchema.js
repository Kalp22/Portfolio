const { default: mongoose } = require("mongoose")


const dbScheme = new mongoose.Schema({
    p: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('About',dbScheme)