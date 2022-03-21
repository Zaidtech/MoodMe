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


$(document).ready(function(){
 
    var currentBtn;
    
    $('.delete').on('click', function(event){
    currentBtn = event.target;
    $('#deleteEmployeeModal').modal('show');
        
    var r_id = "";
    r_id = currentBtn.parentNode.name;
        
    var form_action = document.getElementsByClassName('df');
    console.log(form_action[0]);
        
    form_action[0].action = "/restaurant/"+r_id+"?_method=DELETE";
    
    
    });
});

$(document).ready(function(){
 
    var currentBtn;
    
    $('.edit').on('click', function(event){
    currentBtn = event.target;
    $('#editEmployeeModal').modal('show');
        
    var r_id = "";
    r_id = currentBtn.parentNode.name;
        
    var form_action = document.getElementsByClassName('ef');
    console.log(form_action[0]);
        
    form_action[0].action = "/restaurant/"+r_id+"?_method=PUT";
    
    
    });
});


