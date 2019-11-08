$(".port-image").on("click", function () {
    let win = window.open($(this).attr("data-url"), "_blank");

    if (win) {
        win.focus();
    }

    else {
        alert("Please allow popups for this site");
    }
})

$(".github").on("click", function() {
    let win = window.open($(this).attr("data-url"), "_blank");

    if (win) {
        win.focus();
    }

    else {
        alert("Please allow popups for this site");
    }
})