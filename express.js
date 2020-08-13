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

app.get('/img2', (req, res) => { 
  res.sendFile(path.join(__dirname, '/public/assets/images/adopt_me.png'))
});

router.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname,"/public/assets/js/app.js"));    
});

router.get("/favjs", (req, res) => {
  res.sendFile(path.join(__dirname,"/public/assets/js/fav.js"));    
});


//get for database
//app.get('/db', (req,res) => {
 // res.sendFile(path.join(__dirname, '/public/assets/js/test.json'));
//});

// Import routes and give the server access to them.
var routes = require("./controllers/adoptmeController.js");

app.use(routes);

// Get request for favorites page of the website => error: cannot get favorites.html => solved by: 
app.get('/favorites', (req, res) => {
  res.render('favorites')
});

// listen on the port
app.listen(PORT, () => console.log(`The app is currently listening at http://localhost:${PORT}`));