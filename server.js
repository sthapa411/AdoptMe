
//mongodb username and password 
mangoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://project2:123password@ds137862.mlab.com:37862/heroku_qtgc8rnv",
    {
    useMongoClient: true
    }
);

// Start the API server
app.listen(PORT, function() {
    console.log('......${PORT}');
});