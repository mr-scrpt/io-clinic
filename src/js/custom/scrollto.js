$(document).ready(() => {
	scrollToForm();
});

const scrollToForm = () => {
	$scrollbutton = $(".scrollTo");
	$form = $(".callback");
	$section = $form.closest(".section");
	console.log("-> section", $section);
	$scrollbutton.on("click", (event) => {
		event.preventDefault();
		console.log("-> 222", event);

		const $header = $(".header__line");
		const headerHeight = $header.outerHeight();
		let offset = headerHeight;

		$("html, body").animate(
			{ scrollTop: $section.offset().top - offset },
			"fast"
		);
	});
};

/*$scrollbutton.on("click", "[data-to]", (item) => {
	const $item = $(item.target.closest("[data-to]"));
	const targetClass = $item.attr("data-to");
	const target = $(`.${targetClass}`);
	let offset = 0;
	if (withOffset) {
		const $header = $(".header__row");
		const headerHeight = $header.outerHeight();
		offset = headerHeight;
	}
	$("html, body").animate(
		{ scrollTop: target.offset().top - offset },
		"fast"
	);
});*/
