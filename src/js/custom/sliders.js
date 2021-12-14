$(document).ready(() => {
	/*reviews*/
	const reviews = document.querySelector(".swiper.reviews__inner");
	const reviewsBox = reviews.closest(".slider");
	const reviewsNavNext = reviewsBox.querySelector(".reviews__nav_next");
	const reviewsNavPrev = reviewsBox.querySelector(".reviews__nav_prev");
	const reviewsPagination = reviewsBox.querySelector(".reviews__pagination");

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
	const workPagination = workBox.querySelector(
		".slider-vertical__pagination"
	);
	const optionWork = getOptionWork(workPagination, workNavNext, workNavPrev);
	sliderGen(worklist, optionWork);

	/*presentlist*/
	const presentlist = document.querySelector(".swiper.present__inner");

	const presentBox = presentlist.closest(".slider");
	const presentNavNext = presentBox.querySelector(".present__nav_next");
	const presentNavPrev = presentBox.querySelector(".present__nav_prev");

	const optionPresent = getOptionPresent(presentNavNext, presentNavPrev);
	sliderGen(presentlist, optionPresent);
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

const getOptionWork = (workPagination, navNext, navPrev) => ({
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: false,
	pagination: {
		el: workPagination,
		type: "bullets",
		clickable: true,
	},

	breakpoints: {
		560: {
			slidesPerView: 2,
		},
		994: {
			slidesPerView: 2.4,
		},
		1280: {
			direction: "vertical",
			slidesPerView: 2,
			spaceBetween: 30,
			grid: {
				rows: 2,
				/*column: 2,*/
				fill: "row",
			},
			navigation: {
				nextEl: navNext,
				prevEl: navPrev,
			},
		},
	},
});
const getOptionPresent = (navNext, navPrev) => {
	return {
		slidesPerView: 1.6,
		initialSlide: 1,
		loop: true,
		centeredSlides: true,
		spaceBetween: 30,
		autoHeight: true,
		navigation: false,
		breakpoints: {
			994: {
				spaceBetween: 80,
				navigation: {
					nextEl: navNext,
					prevEl: navPrev,
				},
			},
		},
	};
};
