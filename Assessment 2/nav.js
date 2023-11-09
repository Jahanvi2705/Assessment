$(".navbar-nav ml-auto a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});

$(document).on("click", function (event) {
    if (!$(event.target).closest(".navbar").length) {
        $(".navbar-collapse").collapse("hide");
    }
});