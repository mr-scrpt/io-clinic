$(document).ready(() => {
	setOffset();
	$(window).resize(() => {
		setOffset();
	});
});

const setOffset = () => {
	const height = $(".header__line").outerHeight();
	$(".page__fix-off").css("margin-top", height);
};
