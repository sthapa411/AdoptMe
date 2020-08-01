const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serving static html files
app.use(express.static('public'));

// Need to handle routes for each page of the website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/test.html'))
});

// listen on the port
app.listen(PORT, () => console.log(`The app is currently listening at http://localhost:${PORT}`));