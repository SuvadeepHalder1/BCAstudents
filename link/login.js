function login(){
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;

    if(uname=="world" && pass=="123"){
        location.assign("./ckpcd.html");
    }
    else{
        alert("login failed")
    }
}