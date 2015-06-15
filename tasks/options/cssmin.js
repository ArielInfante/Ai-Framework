module.exports = {
    minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.pre.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
    }
}