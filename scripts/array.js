//testing array

var display = document.getElementById("display");
var list = new Array();

function myFunction(){
    var todo = document.getElementById("todo").value;
    if(todo.length == 0){
        alert("enter a todo item");
    }
    else{
    list.push(todo + " ");
    
    var output = " ";
    for(var i = 0; i < list.length; i++){
    output += "<li>" + list[i] + "<br>";
    }
    display.innerHTML = output;
    }
    
}
