//show search bar when showSearch button is clicked
$("#showSearch").click(function (){
    $("#showSearch")[0].style.display = "none";
    $("#search")[0].style.display = "block";
    showReset();
    $("#searchInput")[0].style.cssText = "visibility: visible;" +
        "border: 1px solid;" +
        "border-color: #656565;" +
        "padding: 5px;" +
        "padding-left: 10px;" +
        "padding-right: 70px;" +
        "width: 100%;";
    if($("#searchInput").css("visibility") === "hidden") {
        $("#searchInput")[0].select();
    }
    setTimeout(function (){
        $("#searchInput")[0].select();
        text = $("#searchInput")[0].value;
        $("#searchInput")[0].value = "";
        $("#searchInput")[0].value = text;
        $("#searchInput")[0].scrollLeft = $("#searchInput")[0].scrollWidth;
    },50);
});
//show search bar on slash press
$(window).keyup(function (event){
    if(event.key === "Escape"){
        $(".close").click();
    }
    if(event.key === "/"){
        if(event.target.tagName != "INPUT") {
            if (window.innerWidth < 768) {
                $("#showMobileSearch").click();
            } else {
                $("#showSearch").click();
            }
        }
    }
});
//handle clicks (that not work with "$(#id).click(function(){})" :) )
$(document).click(function (event) {
    //hide small menu
    if(" fadedBg closeMenu".indexOf(event.target.id) > 0) {
        $(".fadedBg").css({"visibility": "hidden", "opacity": "0"});
        $(".smallMenu").removeClass("show");
        $(".menuHead, .menuBody, #smallGL").css({"display": "none"});
    }
    //hide small search bar
    if(" closeSearch".indexOf(event.target.id) > 0) {
        $(".smallSearch").removeClass("show");
        $(".smallSearchBar").css({"display": "none"});
    }
    //hide login page
    if(" loginPage closeLogin".indexOf(event.target.id) > 0){
        $(".loginPage").css({"visibility": "hidden", "opacity": "0"});
    }
    //hide search bar when clicked outside it
    if(" searchInput resetSearch search showSearch".indexOf(event.target.id) < 1){
        $("#searchInput").css({"width": "0", "visibility": "hidden"});
        $("#showSearch").css({"display": "block"});
        $("#search").css({"display": "none"});
        $("#resetSearch").css({"display": "none"});
    }
    //switch between login and register page
    if(" loginSlider".indexOf(event.target.id) > 0) {
        if($("#loginSlider").is(":checked")){
            // register
            $(".bottom").css({"transform": "translateX(-100%)"});
            $(".register").css({"visibility": "visible"});
            $(".login").css({"visibility": "hidden"});
        }
        else {
            //login
            $(".bottom").css({"transform": "translateX(0)"});
            $(".register").css({"visibility": "hidden"});
            $(".login").css({"visibility": "visible"});
        }
    }
    //switch between login and register page on keyboard navigation
    if(" loginCheckButton".indexOf(event.target.id) > 0) {
        $("#loginSlider").click();
    };
});
//show reset button(x) only when is text in input field, hide otherwise
$("#searchInput").on("input", showReset);
function showReset(){
    text = $("#searchInput")[0].value;
    if(text != "") {
        $("#resetSearch").css({"display": "block"});
    } else {
        $("#resetSearch").css({"display": "none"});
    }
};
//hide reset button(x) after it's clicked
$("#resetSearch").click(function (){
    $("#resetSearch")[0].style.display = "none";
});
//show mobile reset button when is text in input
$("#smallSearchInput").on("input", showSmallReset);
function showSmallReset(){
    text = $("#smallSearchInput")[0].value;
    if(text != "") {
        $("#smallResetSearch").css({"display": "block"});
    } else {
        $("#smallResetSearch").css({"display": "none"});
    }
};
//hide the mobile reset button after it's pressed
$("#smallResetSearch").click(function (){
    $("#smallResetSearch")[0].style.display = "none";
});
//show mobile menu when clicked on hamburger menu
$("#showMobileMenu").click(function (){
    $(".fadedBg").css({"visibility": "visible", "opacity": "0.6"});
    $(".smallMenu").addClass("show");
    $(".menuHead, .menuBody, #smallGL").css({"display": "flex"});
});
//show mobile search bar
$("#showMobileSearch").click(function (){
    $(".smallSearch").addClass("show");
    $(".smallSearchBar").css({"display": "flex"});
    if($("#smallSearchInput").css("visibility") === "hidden") {
        $("#smallSearchInput")[0].select();
    }
    //set pointer at the end of the text
    setTimeout(function (){
        $("#smallSearchInput")[0].select();
        text = $("#smallSearchInput")[0].value;
        $("#smallSearchInput")[0].value = "";
        $("#smallSearchInput")[0].value = text;
        $("#smallSearchInput")[0].scrollLeft = $("#smallSearchInput")[0].scrollWidth;
    }, 50);
});
//load the login/register page
$(".loginPage").load("/login");
//show the login page
$("#smallUser, #user").click(function (){
    $(".close").click();
    $(".loginPage").css({"visibility": "visible", "opacity": "1"});
});
