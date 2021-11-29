function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            // myFunction();
            var output="";
            output += `<thead>
                        <tr>
                        <th scope="col">Checkbox</th>
                        <th scope="col">ID</th>
                        <th scope="col">Task</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr id="row0">
                        <td> <input  id="checkbox0" onclick="checkfunc(0)" type='checkbox' style="width:30px;height:20px;"></td>
                        <td>${response[0].id}</td>
                        <td>${response[0].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row1">
                        <td><input  id="checkbox1" onclick="checkfunc(1)" type='checkbox' style="width:30px;height:20px;"></td>
                        <td>${response[1].id}</td>
                        <td>${response[1].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row2">
                        <td><input id="checkbox2" onclick="checkfunc(2)" type='checkbox' style="width:30px;height:20px;" ></td>
                        <td>${response[2].id}</td>
                        <td>${response[2].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row3">
                        <td><input id="checkbox3" checked disabled window.onload="checkfunc(3)" type='checkbox' style="width:30px;height:20px;"></td>
                        <td>${response[3].id}</td>
                        <td>${response[3].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row4">
                        <td><input id="checkbox4"  onclick="checkfunc(4)" type='checkbox' style="width:30px;height:20px;"></td>
                        <td>${response[4].id}</td>
                        <td>${response[4].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row5">
                        <td><input id="checkbox5" onclick="checkfunc(5)" type='checkbox' style="width:30px;height:20px;"></td>
                        <td>${response[5].id}</td>
                        <td>${response[5].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row6">
                        <td><input  id="checkbox6" onclick="checkfunc(6)" type='checkbox' style="width:30px;height:20px;"></td>
                        <td>${response[6].id}</td>
                        <td>${response[6].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row7">
                        <td><input id="checkbox7" checked disabled onclick="checkfunc(7)" type='checkbox' style="width:30px;height:20px;"></td>
                        <td>${response[7].id}</td>
                        <td>${response[7].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row8">
                        <td><input id="checkbox8" onclick="checkfunc(8)" type='checkbox' style="width:30px;height:20px;" ></td>
                        <td>${response[8].id}</td>
                        <td>${response[8].title}</td>
                        <td></td>
                        </tr>
                        <tr id="row9">
                        <td><input id="checkbox9" checked disabled  onclick="checkfunc(9)" type='checkbox' style="width:30px;height:20px;"></td>
                        <td>${response[9].id}</td>
                        <td>${response[9].title}</td>
                        <td></td>
                        </tr>
                        </tbody>`
            document.getElementById("table1").innerHTML = output;
            myFunction();
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
}


        



// function to logout start
function redirectback(){
    window.location="index.html";
}
// function to logout end




// code to clear all the tasks
function clearalltasks(){
    var lst = document.getElementsByTagName("table");
    lst[0].innerHTML = "";
}
// code to clear all tasks ends








// code to strike the tasks already checked in checkboxes
function checkfunc(n){

    var chk = "checkbox" + n;
    var row = "row" + n;
    var count=0;
    if(document.getElementById(chk).hasAttribute("disabled")==true){
        document.getElementById(row).style.textDecoration = 'line-through' ;
        document.getElementById(row).style.color = 'red';
    }
    else if(document.getElementById(chk).checked==true){
        document.getElementById(row).style.textDecoration = 'line-through';
        document.getElementById(row).style.color = "red";
    }
    else{
        document.getElementById(row).style.textDecoration = 'none';
        document.getElementById(row).style.color = '#ffffff';
    }
}

// code to strike the tasks already checked in checkboxes end


function myFunction(){
    
    let count=0;
    let target=5;
    $('input[type="checkbox"]').on('change',function(){
      if($(this).prop('checked')==true){
      count++;
      if(count==target){
          alert(`Congrats! You have completed ${target} tasks!`);
        }
      }
      else{
        count--;
      }
    });
  }