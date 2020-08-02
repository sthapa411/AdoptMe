const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const router = express.Router();
const exphbs = require('express-handlebars')

// Serving static html files
app.use(express.static('public'));
app.use(express.static('views'));

// Setting app engine  for handlebars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Need to handle routes for each page of the website
app.get('/', (req, res) => {
  res.render('index')
});

// Get request for default images of the website
app.get('/img', (req, res) => { 
  res.sendFile(path.join(__dirname, '/public/assets/images/slide.jpg'))
});

// listen on the port
app.listen(PORT, () => console.log(`The app is currently listening at http://localhost:${PORT}`));