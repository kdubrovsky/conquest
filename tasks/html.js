// ------------ connecting gulp
import gulp from 'gulp';


// ------------ config import
import path from '../config/path.js';
import plugins from '../config/plugins.js';


// ------------ connecting plugins

import htmlmin from 'gulp-htmlmin';                    // html minifier
import size from 'gulp-size';                          // size measuring
import plumber from 'gulp-plumber';                    // errors catching
import notify from 'gulp-notify';                      // notifications
import webpHtml from 'gulp-html-img-wrapper';                 // webp html support


const plumberHTMLSettings = {
    errorHandler: notify.onError((err) => {
        return {
            title: 'HTML',
            message: err.message
        };
    })
};

// ------------ html processing pipe
const html = () => {
    return gulp.src(path.html.src)
        .pipe(plumber(plumberHTMLSettings))
        .pipe(webpHtml(plugins.webpwrapper))
        .pipe(size(plugins.messages.sizeBefore))
        .pipe(htmlmin(plugins.htmlmin))
        .pipe(size(plugins.messages.sizeAfter))
        .pipe(gulp.dest(path.html.dest))
};

export default html; 