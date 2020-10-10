const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("task", TaskSchema);