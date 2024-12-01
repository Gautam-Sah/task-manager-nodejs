const mongoose = require("mongoose")

const taskschema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is must"],
    trim: true,
    maxlength: [30, "name must be less than 30"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("task", taskschema)
