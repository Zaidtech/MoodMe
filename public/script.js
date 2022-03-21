var room = 1;
function add_fields() {
    room++;
    var objTo = document.getElementById('room_fileds')  
    var divtest = document.createElement("div");
    divtest.innerHTML = 
    '<div class="content"><span>Date: <input type="date" style="width:100px;" name="grade[][date]" value="" />   Grade: <input type="text" style="width:48px;" name="grade[][grade]" value="" />  Score: <input type="text" style="width:48px;" name="grade[][score]" value="" /></div>'    
    
    objTo.appendChild(divtest)
}


var address = {}
function fillData(id,name,cuisine,r_id,building,street){
   
    
    document.getElementById("rn").value = name;
    document.getElementById("rc").value = cuisine;undefined
    document.getElementById("r_id").value = r_id;
    document.getElementById("rb").value = building;
    document.getElementById("rs").value = street;
    
}

var room1 = 1;
function add_efields() {
    room1++;
    var objTo = document.getElementById('room_fields')  
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


