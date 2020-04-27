const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, default: "No Content" },
  imagePath: { type: String, require: true },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Post", postsSchema);
