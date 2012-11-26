$(document).ready(function () {

    $("#loginbutton").click(function () {
        $("#loginbox").animate({
            opacity: 0,
        }, 500, function () {
            $("#loginbox").css('display', 'none');
            $("#loginbox").remove();
        });        
    });
    //Main Body Right-Click Handler  MUST BE OVERRIDDEN ON NON RIGHT CLICKABLES!
    
    $("#desktop").bind("contextmenu", function (e) {
        e.preventDefault();
        $("div.context-menu").hide();
        $("div.context-menu").remove();
        $("<div class='context-menu'>Desktop Context Menu</div>")
        .appendTo("body")
        .css({ top: e.pageY + "px", left: e.pageX + "px" });
    });
    
    //Taskbar Right-Click Handler
    $("#taskbar").bind("contextmenu", function (e) {
        e.preventDefault();
        $("div.context-menu").hide();
        $("div.context-menu").remove();
        $("<div class='context-menu'>Taskbar Context Menu</div>")
        .appendTo("body")
        .css({ top: e.pageY + "px", left: e.pageX + "px" });
    });
    //Handle click to get rid of context menus
    $(document).bind("click", function (event) {
        $("div.context-menu").hide();
        $("div.context-menu").remove();
    });






});