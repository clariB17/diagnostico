$(document).ready(function() {
    $("#home").click(function(){
        $("#centro").load("home.html");
    });
    $("#productos").click(function(){
        $("#centro").load("productos.html");
    });
    $("#compra").click(function(){
        $("#centro").load("compra.html");
    });
    $("#nosotros").click(function(){
        $("#centro").load("nosotros.html");
    });

});