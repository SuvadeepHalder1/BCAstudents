var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
email.addEventListener('textInput',email_varify);
password.addEventListener('textInput',password_varify);
function email_varify(){
    if(email.value.length >=8 ){
        return true;
    }
    
}
function password_varify(){
    if(email.value.length >=8 ){
        return true;
    }
    
}