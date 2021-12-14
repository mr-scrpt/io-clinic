const gulp = require("gulp");
const { config } = require("../config");

exports.video = gulp.task("video", function () {
	return gulp
		.src(config.src + config.video.src)
		.pipe(gulp.dest(config.build + config.video.dest));
});
