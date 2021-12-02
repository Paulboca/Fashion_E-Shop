// xhttp = new XMLHttpRequest();
// xhttp.onload = function() {
//     $(".menubar").html(this.responseText);
// }
// xhttp.open("GET", "./navbar");
// xhttp.send();
$(".menubar").load("./navbar");
// $(".menubar1").load("./navbar1");

var loginForm = document.forms.login;
$("#submit").on("click", function(){
    $.post("/server.js",
    {
        email: loginForm.elements.email.value,
        password: loginForm.elements.password.value
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
    
    alert(loginForm.elements.email.value);
});
// var abc = document.forms["login"]["email"].value;
// console.log(abc);
