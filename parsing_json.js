const fs = require('fs');
const { forever } = require('request');
let data = fs.readFileSync('restaurants.json');
let restaurants = JSON.parse(data);
console.log(restaurants.length);

for(var i=0;i<restaurants.length;i++){

    console.log(restaurants[i]['name']);

}