$(document).ready(() => {
	const $inputs = $(".input.input_with_name .input__control");

	$inputs.on("focus", (elem) => {
		const $input = $(elem.target).closest(".input");
		const $name = $input.find(".input__name");
		$name.hide();
	});

	$inputs.on("blur", (elem) => {
		const $inputControl = $(elem.target);

		console.log("-> control", $inputControl);
		const $input = $(elem.target).closest(".input");
		const $name = $input.find(".input__name");
		if (!$inputControl.val()) {
			$name.show();
		}
	});
});
