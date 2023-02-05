import webpackStream from "webpack-stream";

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(webpackStream({
			mode: 'development',
			output: {
				filename: 'app.min.js'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
}