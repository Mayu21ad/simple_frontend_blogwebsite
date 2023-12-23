$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')

})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')

})
const passwordfield=document.getElementById("passwordfield");
const togglepassword=document.getElementById("togglepassword");
togglepassword.addeventlistener('click',() =>{
    if (passwordfield.type==='password'){
        passwordField.type = 'text';
    togglePassword.textContent = 'Hide';
  } else {
    passwordField.type = 'password';
    togglePassword.textContent = 'Show';
  }
});