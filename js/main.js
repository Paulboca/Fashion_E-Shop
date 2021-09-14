xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    $(".menubar").html(this.responseText);
}
xhttp.open("GET", "./navbar");
xhttp.send();