$(function () {
	let mySwiper = new Swiper(".swiper", {
		// 以下にオプションを設定
		loop: true, //最後に達したら先頭に戻る
		slidesPerView: 2,
		//スライドを2つ（分）表示
		centeredSlides: true, //アクティブなスライドを中央に表示
		effect: "coverflow", //スライドのエフェクトを coverflow に

		//ページネーション表示の設定
		pagination: {
			el: ".swiper-pagination", //ページネーションの要素
			type: "bullets", //ページネーションの種類
		},

		//ナビゲーションボタン（矢印）表示の設定
		navigation: {
			nextEl: ".swiper-button-next", //「次へボタン」要素の指定
			prevEl: ".swiper-button-prev", //「前へボタン」要素の指定
		},

		//スクロールバー表示の設定
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// },
		//要素の指定
	});
});
