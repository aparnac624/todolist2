
// var flag;

function validate(login){
    var email=document.getElementById("typeEmailX").value;
    var password=document.getElementById("typePasswordX").value;
    if(email==''){
        alert('email field cannot be empty');
    }
    else if(password==''){
        alert('password field cannot be empty');
    }
    else if(email!='admin'){
        alert("please enter the correct username");
    }
    else if(password!='12345'){
        alert("please enter the correct password");
    }
    else{
        login();
    }
}

function login(){
    window.location="todolist.html";
}

    