$(".openbtn1").click(function () {
	//ボタンがクリックされたら
	$(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
	$("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
	$(".circle-bg").toggleClass("circleactive"); //丸背景にcircleactiveクラスを付与
});

$("#g-nav div").click(function () {
	//ナビゲーションのリンクがクリックされたら
	$(".openbtn1").removeClass("active"); //ボタンの activeクラスを除去し
	$("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスを除去
	$(".circle-bg").removeClass("circleactive"); //丸背景のcircleactiveクラスを除去
});

// メニュー画面からのスクロール
$("#move-home").on("click", function () {
	$("html,body").animate({ scrollTop: $("#home").offset().top });
});
$("#move-company").on("click", function () {
	$("html,body").animate({ scrollTop: $("#company").offset().top });
});
$("#move-service").on("click", function () {
	$("html,body").animate({ scrollTop: $("#service").offset().top });
});
$("#move-production").on("click", function () {
	$("html,body").animate({ scrollTop: $("#production").offset().top });
});
$("#move-about").on("click", function () {
	$("html,body").animate({ scrollTop: $("#about").offset().top });
});
