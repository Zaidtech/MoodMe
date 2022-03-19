const app  = require('express')();
const http = require('http')
var port = 8080;

// connect to db
const MONGODB_URL = 'mongodb+srv://AMU_VLAB_ADMIN:ZVL1vxcOIdbJ2VkH@cluster0.5csqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req,res)=>{
    res.send("server running!!!");
});

app.get("/viewjson", (req,res)=>{
    var body ="";
    request(json_url,   options, (error, res, body)=>{

        if(error)
            return console.log(error);
        else{
            body = res;
            console.log(body);
        }
    });

    // res.send(body);

});

app.listen(port, ()=>{

    console.log("server started!!");

});







