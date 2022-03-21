const mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({

    address :{
        building:   String,
        street: String,
    },

    cuisine : String,
    grades: [
        { 
        date: {
            date:  Date
        },
        grade: String,
        score: Number
        }
    ],
    name: String,
    restaurant_id: Number

});

module.exports = mongoose.model("Restaurant", restaurantSchema);
