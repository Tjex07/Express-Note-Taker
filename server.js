const express = require('express');

//call on express
const app = express();

//sets port to 3000
const PORT = process.env.PORT || 3000;

//enables express data handling and parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const indexRoutes = require("./routes/index");
app.use(indexRoutes);
const notesRoutes = require("./routes/notes");
app.use(notesRoutes);

//creates the local server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));