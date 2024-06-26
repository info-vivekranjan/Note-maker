const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
env.config();
const connect = require("./config/db");
const userRoute = require("./routes/userRoute");
const noteRoute = require("./routes/NoteRoute");
const textEditorRoute = require("./routes/TextEditorRoute");
const markdownEditorRoute = require("./routes/MarkdownEditorRoute");

const PORT = process.env.PORT || 6800
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/user", userRoute);
app.use("/note", noteRoute);
app.use("/textEditor", textEditorRoute);
app.use("/markdownEditor", markdownEditorRoute);


app.listen(PORT, async () => {
  await connect();
  console.log(`Server is connected to port ${PORT}`);
});
