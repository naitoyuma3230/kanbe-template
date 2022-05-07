// resizeイベントの取得
window.addEventListener("resize", () => {
	// あとは上記と同じスクリプトを実行
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
});
