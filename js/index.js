var onOff = false;

// DESKTOP SCRIPT
function deskOnShare() {
    $(".share").css("top", "-4.5rem");
    $(".share").css("transform", "scale(1)");
    onOff = true;

}

function deskOffShare() {
    $(".share").css("top", "-1.5rem");
    $(".share").css("transform", "scale(0)");
    onOff = false;
}

function mobOnShare() {
    $(".share-mob").css("opacity", "1");
    $(".share-mob").css("display", "flex");
    $(".cont-auth-share").css("display", "none");
    onOff = true;

}

function mobOffShare() {
    $(".share-mob").css("opacity", "0");
    $(".share-mob").css("display", "none");
    $(".cont-auth-share").css("display", "flex");
    onOff = false;
}


var width = 0;

// WINDOWS RESIZE
$(window).resize(function() {
    deskOffShare();
    mobOffShare();
    width = $(window).width();
});


$(".share_i").click(function() {
    if (onOff === false) {
        if (width < 991) {
            mobOnShare();
        } else {
            deskOnShare();
        }
    } else {
        if (width < 991) {
            mobOffShare();
        } else {
            deskOffShare();
        }
    }
})