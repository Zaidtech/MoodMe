// alert("I am connected!!")
console.log("I am connected")
var room = 1;
function add_fields() {
    room++;
    var objTo = document.getElementById('room_fileds')  
    var divtest = document.createElement("div");
    divtest.innerHTML = 
    '<div class="content"><span>Date: <input type="date" style="width:100px;" name="grade[][date]" value="" />   Grade: <input type="text" style="width:48px;" name="grade[][grade]" value="" />  Score: <input type="text" style="width:48px;" name="grade[][score]" value="" /></div>'    
    
    objTo.appendChild(divtest)
}
