$(function () {
	$(".ani-fadeUp").on("inview", function (event, isInView) {
		if (isInView) {
			//表示領域に入った時
			$(this).addClass("animate__animated animate__fadeInUp animate__fadeIn"); //クラス名が付与
		} else {
			//表示領域から出た時
			$(this).removeClass("animate__animated animate__fadeInUp"); //クラス名が除去
		}
	});
	$(".ani-up").on("inview", function (event, isInView) {
		if (isInView) {
			//表示領域に入った時
			$(this).addClass("animate__animated animate__fadeIn animate__slower"); //クラス名が付与
		} else {
			//表示領域から出た時
			$(this).removeClass("animate__animated animate__fadeIn animate__slower"); //クラス名が除去
		}
	});

	//logoの表示
	$(window).on("load", function () {
		$("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
		$("#splash_logo").delay(1200).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
	});
});
