$(window).on("load resize", function () {
	var windowWidth = window.innerWidth;
	var elements = $(".fixed");
	Stickyfill.add(elements);
});
