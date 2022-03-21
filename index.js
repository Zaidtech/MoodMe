const express  = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')
var Restaurant = require("./models/restuarants");
var restuarantsRoutes = require("./routes/router");
var port = 8080;
var  methodOverride = require("method-override");
const MONGODB_URL = require("./config/db.config");
const { join } = require('path');

// connect to db
mongoose.connect(MONGODB_URL.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.use(restuarantsRoutes);


app.listen(port, ()=>{
    console.log("Server running  !!");

});







