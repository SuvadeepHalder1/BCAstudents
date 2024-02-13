var objUser=[
    {
        username: "suvadeep",
        password: "halder"
    },
    {
        username: "sanchita",
        password: "das" 
    },
    {
        username: "sumit",
        password: "das" 
    }
]



function login(){
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;

    for(i=0;i<objUser.length; i++){
        if(uname==objUser[i].username && pass==objUser[i].password){
            location.assign("./ckpcd.html");
            return
        }

    }

        alert("login failed")

}