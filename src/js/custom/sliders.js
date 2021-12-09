/*const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	breakpoints: {

		768: {
			slidesPerView: 3,

		},

		994: {
			slidesPerView: 3,
		},
		1280: {
			slidesPerView: 3,
			navigation: {
				nextEl: ".slider__nav_next",
				prevEl: ".slider__nav_prev",
			},
		},
	},
});*/

$(document).ready(() => {
	$sliders = $(".swiper");

	$sliders.each((_, swiperItem) => {
		const optionName = $(swiperItem).attr("data-option");
		const sliderBox = swiperItem.closest(".slider");
		const navNext = sliderBox.querySelector(".slider__nav_next");
		const navPrev = sliderBox.querySelector(".slider__nav_prev");
		const pagination = sliderBox.querySelector(".slider__pagination");
		if (optionName === "optionCommon") {
			new Swiper(swiperItem, getOptions(navNext, navPrev, pagination));
		}
		if (optionName === "optionMain") {
			new Swiper(swiperItem, {
				slidesPerView: 1,
				centeredSlides: true,
				loop: true,
				_spaceBetween: 30,
				autoHeight: true,
				centeredSlides: true,
				navigation: {
					nextEl: navNext || null,
					prevEl: navPrev || null,
				},
			});
		}
	});
});

const getOptions = (navNext, navPrev, pagination) => ({
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	pagination: {
		el: pagination || null,
		type: "bullets",
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
		},

		994: {
			slidesPerView: 3,
		},
		1280: {
			slidesPerView: 3,
			navigation: {
				nextEl: navNext || null,
				prevEl: navPrev || null,
			},
		},
	},
});
