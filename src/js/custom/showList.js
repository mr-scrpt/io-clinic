$(document).ready(() => {
	const $list = $(".service__list-long");
	const $button = $(".show-more");

	$button.on("click", () => {
		$list.show("slow");
		$button.hide();
	});
});
