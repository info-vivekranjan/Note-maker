const mongoose = require("mongoose");

const textEditorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
        type: String,
        required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TextEditor = mongoose.model("TextEditor", textEditorSchema);

module.exports = TextEditor;
