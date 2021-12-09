$(document).ready(() => {
	/*reviews*/
	const reviews = document.querySelector(".swiper.reviews__inner");
	const reviewsBox = reviews.closest(".slider");
	const reviewsNavNext = reviewsBox.querySelector(".slider__nav_next");
	const reviewsNavPrev = reviewsBox.querySelector(".slider__nav_prev");
	const reviewsPagination = reviewsBox.querySelector(".slider__pagination");

	const optionReviews = getOptionReviews(
		reviewsPagination,
		reviewsNavNext,
		reviewsNavPrev
	);
	sliderGen(reviews, optionReviews);

	/*worklist*/
	const worklist = document.querySelector(".swiper.worklist__inner");
	const workBox = worklist.closest(".slider-vertical");
	const workNavNext = workBox.querySelector(".slider-vertical__nav_next");
	const workNavPrev = workBox.querySelector(".slider-vertical__nav_prev");

	const optionWork = getOptionWork(workNavNext, workNavPrev);
	sliderGen(worklist, optionWork);
});

const sliderGen = (block, option) => {
	new Swiper(block, option);
};

const getOptionReviews = (pagination, navNext, navPrev) => {
	return {
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
	};
};

const getOptionWork = (navNext, navPrev) => ({
	direction: "vertical",
	slidesPerView: 2,
	spaceBetween: 30,
	grid: {
		rows: 1,
		/*column: 2,*/
		fill: "row",
	},

	autoHeight: false,
	navigation: {
		nextEl: navNext,
		prevEl: navPrev,
	},
	breakpoints: {
		480: {
			slidesPerView: 2,
			grid: {
				rows: 2,
				/*column: 2,*/
				fill: "row",
			},
		},
	},
});
