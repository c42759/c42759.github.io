
$(document).on("keydown", function (e) {
	if (e.ctrlKey  &&  e.altKey  &&  e.key === "i") {
		if ($(".contacts").css("display") == "none") {
			$(".contacts").fadeIn();
		} else {
			$(".contacts").fadeOut();
		}
	}
});
