// ------------ connecting gulp
import gulp from 'gulp'

// ------------ config import
import path from './config/path.js'
import plugins from './config/plugins.js'


// ------------ connecting plugins
import browserSync from 'browser-sync'       // browser live reload


// ------------ importing tasks
import clear from './tasks/clear.js'
import html from './tasks/html.js'
import scss from './tasks/scss.js'
import img from './tasks/img.js'
import svg from './tasks/svg.js'




// ------------ server task
const server = () => {
    browserSync.init(plugins.browser);
};


// ------------ watching tasks
const watcher = () => {
    gulp.watch(path.html.watch, html).on('all', browserSync.reload);
    gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);  // watching CSS
    gulp.watch(path.img.watch, img).on('all', browserSync.reload);  // watching images
    gulp.watch(path.svg.watch, svg).on('all', browserSync.reload);  // watching svg
};


// ------------ granular tasks
export { clear };
export { html };
export { scss };
export { img };
export { svg };
export { watcher };


// ------------ builds
const build = gulp.series(
    clear,
    gulp.parallel(html, scss, img, svg)
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)  //
);

export default plugins.isProd
    ? build
    : dev; 