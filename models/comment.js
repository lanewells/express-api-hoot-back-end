const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
})

module.exports = commentSchema
