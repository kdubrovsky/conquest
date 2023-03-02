const pathSrc = './source';
const pathDest = './public';


export default {

    root: pathDest,

    html: {
        src: pathSrc + '/*.html',
        watch: pathSrc + '/*.html',
        dest: pathDest
    },

    scss: {
        src: pathSrc + '/sass/*.{sass,scss}',
        watch: pathSrc + '/sass/**/*.{sass,scss}',
        dest: pathDest + '/css'
    },

    img: {
        src: pathSrc + '/img/*.{jpg,png,jpeg,gif,svg}',
        watch: pathSrc + '/img/**/*.{jpg,png,jpeg,gif,svg}',
        dest: pathDest + '/img'
    },

    svg: {
        src: pathSrc + '/icons/*.svg',
        watch: pathSrc + '/icons/**/*.svg',
        dest: pathDest + '/icons'
    }
} 