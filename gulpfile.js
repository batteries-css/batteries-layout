var gulp    = require("gulp"),
	replace = require("gulp-replace"),
	less    = require("gulp-less"),
	maps    = require("gulp-sourcemaps"),
	rename  = require("gulp-rename"),
	minify  = require("gulp-minify-css"),
	prefix  = require("gulp-autoprefixer");

var SRC = {
	CSS: {
		WATCH: "src/**/*.less",
		MAIN: "src/batteries.less"
	}
};

var DIST = {
	CSS: "dist/"
};

gulp.task("css", function () {
	return gulp.src(SRC.CSS.MAIN)
		.pipe(maps.init())
		.pipe(less())
		.pipe(prefix())
		.pipe(maps.write())
		.pipe(gulp.dest(DIST.CSS))
		.pipe(rename("batteries.min.css"))
		.pipe(minify())
		.pipe(maps.write())
		.pipe(gulp.dest(DIST.CSS));
});

gulp.task("watch", function () {
	gulp.watch([SRC.CSS.WATCH], ["css"]);
});