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
		const sliderBox = swiperItem.closest(".slider");
		const pagination = sliderBox.querySelector(".slider__pagination");
		const navNext = sliderBox.querySelector(".slider__nav_next");
		const navPrev = sliderBox.querySelector(".slider__nav_prev");

		const swiper = new Swiper(swiperItem, {
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			pagination: {
				el: pagination,
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
						nextEl: navNext,
						prevEl: navPrev,
					},
				},
			},
		});
	});
});
