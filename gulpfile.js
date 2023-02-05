import gulp from "gulp";
import { path } from "./gulp/config/path.js";

global.app = {
	gulp: gulp,
	path: path
}

//======tasks===========
import { js } from './gulp/tasks/js.js';


gulp.task('default', js);