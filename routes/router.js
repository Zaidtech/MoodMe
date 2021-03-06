var express = require('express');
var mongoogse  = require('mongoose');
var bodyParser = require("body-parser");
var Restaurant = require("../models/restuarants");
const req = require('express/lib/request');
const restuarants = require('../models/restuarants');
var router = express.Router();

var resultPerPage = 20;
var no_of_results = 25360;


router.get("/restaurant", function(req,res){
    res.redirect("/");
});

router.get("/", function(req,res){
    // console.log(req)
    if(no_of_results==0){

        Restaurant.find({}, (err,result)=>{
            if(err) throw err;
            no_of_results = result.length;
            console.log(result.length);
        
        let numberof_pages = Math.ceil(no_of_results/resultPerPage);
        let page = req.query.page ? Number(req.query.page): 1;

        if(page >  numberof_pages ){
            res.redirect('/?page='+encodeURIComponent(numberof_pages));
        }
        else if(page<1){
            res.redirect('/?page='+encodeURIComponent('1'));
        }

        var limit = resultPerPage;
        // wehre to stat countng again...
        var skipIndex = (page-1)*limit;

        Restaurant.find()
            .limit(limit)
            .skip(skipIndex)
            .exec(async function(err,result){
                if(err) throw err;

                let iterator  = (page-5) < 1 ? 1:page-5;
                let endingLink = (iterator+9) <= numberof_pages ? (iterator+9):page+ (numberof_pages - page);
                if(endingLink   < (page+4)){
                    iterator -= (page+4) - numberof_pages;  
                }
                res.render('index', {data:result, page, iterator, endingLink,   numberof_pages, resultPerPage,  no_of_results});
            });
        });
    }
    else{

        let numberof_pages = Math.ceil(no_of_results/resultPerPage);
        let page = req.query.page ? Number(req.query.page): 1;

        if(page >  numberof_pages ){
            res.redirect('/?page='+encodeURIComponent(numberof_pages));
        }
        else if(page<1){
            res.redirect('/?page='+encodeURIComponent('1'));
        }

        var limit = resultPerPage;
        // wehre to stat countng again...
        var skipIndex = (page-1)*limit;

        Restaurant.find()
            .limit(limit)
            .skip(skipIndex)
            .exec(async function(err,result){
                if(err) throw err;

                let iterator  = (page-5) < 1 ? 1:page-5;
                let endingLink = (iterator+9) <= numberof_pages ? (iterator+9):page+ (numberof_pages - page);
                if(endingLink   < (page+4)){
                    iterator -= (page+4) - numberof_pages;  
                }
                res.render('index', {data:result, page, iterator, endingLink,numberof_pages,resultPerPage,no_of_results});
            });
    }
});

router.post("/", function(req,res){
    // console.log(req.body['grade[][date]'].length);

    var name = req.body.name;
    var cuisine = req.body.cuisine;
    var street= req.body['address[street]'];
    var building = req.body['address[building]'];

    var address = {
        street: street,
        building: building
    };

    var restaurant_id = req.body.r_id;

    // var n_grades = req.body['grade[date]'].length;   
    var grades =[];
    
    for(var i=0;i<req.body['grade[][date]'].length;i++){
        var obj = {};

        var ddate = req.body['grade[][date]'][i];
        var grade = req.body['grade[][grade]'][i];
        var score = req.body['grade[][score]'][i];

        obj =  {

            date : {
                date:ddate
            },
            grade: grade,
            score: score
        }
        console.log(obj);
        grades.push(obj);
    }

    
    var newRestaurant = { address:address, cuisine:cuisine, gardes:grades,  name:name,  restaurant_id:restaurant_id };
    // res.send(newRestaurant);

    Restaurant.create(newRestaurant, function (err, result) {
        if (err)
            console.log(err);
        else {
            no_of_results++;
            console.log("Added a new restauant to the database");
            res.redirect('/');
        }
    });

});


router.delete("/restaurant/:id", function (req, res) {
    // console.log(req.params.id);
    // res.send("delete route")

    Restaurant.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            // console.log(err);
            res.redirect("/");
        } else {
            no_of_results--;
            console.log("restaurant deleted!!")
            res.redirect("/");
        }
    });
});



// Http form only make use of get and post and fails to works on PUT,Delete etc.
router.put("/restaurant/:id", function(req,res){

    // updated data.
    
    // /blogs/<%=blog._id%>?_method=PUT" method='POST'

    var name = req.body.name;
    var cuisine = req.body.cuisine;
    var street= req.body['address[street]'];
    var building = req.body['address[building]'];

    var address = {
        street: street,
        building: building
    };

    var restaurant_id = req.body.r_id;
    var newRestaurant = { address:address, cuisine:cuisine, name:name,  restaurant_id:restaurant_id };
    
    // Restaurant.findByIdAndUpadte(req.params.id,newRestaurant,callback)
    Restaurant.findByIdAndUpdate(req.params.id,newRestaurant,function(err,restauant){
        if(err)
            res.redirect("err");
        else{
            restauant.save();
            res.redirect("/");
        }    
    });
});

router.post("/change", function(req,res){
    resultPerPage = Number(req.body.resultPP);
    console.log(Number(req.body.resultPP));
    res.redirect("/restaurant");
});

module.exports = router;
