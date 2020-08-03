const express = require("express");
const path = require("path");
const app = express();
const PORT = 3306;
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

// Get request for favorites page of the website => error: cannot get favorites.html => solved by: 
app.get('/favorites', (req, res) => {
  res.render('favorites')
});

// listen on the port
app.listen(PORT, () => console.log(`The app is currently listening at http://localhost:${PORT}`));



//
//mongodb username and password 
//mangoose.Promise = global.Promise;
// Connect to the Mongo DB
//mongoose.connect(
  //  process.env.MONGODB_URI ||
  //  "mongodb://project2:123password@ds137862.mlab.com:37862/heroku_qtgc8rnv",
  //  {
  //  useMongoClient: true
  //  }
//);

// Start the API server
//app.listen(PORT, function() {
  //  console.log('......${PORT}');
//});