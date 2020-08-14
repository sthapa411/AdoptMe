var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path'); 
const axios = require('axios');
var app = express();
const router = express.Router();



const key = 'cxyhnll5ScFfHdAHD2pKJ0hAOREZIlaSFRx6MnajQy35qxKJVn';

const secret = 'O4kyEkoJkbFd5OfhhPaYja1c8GHtSPyI9W1eCyBc';



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');






router.get('/', function (req, res) {
  res.render("card")
});

router.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname,"/app.js"));    
});



app.use("/", router)
 
app.listen(3000, () => {
    console.log("Starting server on port 3000")
      
});


