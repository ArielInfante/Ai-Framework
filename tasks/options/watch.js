module.exports = {
    options: {
        livereload: false,
    },
    html: {
        files: ['*.haml', '*.html', 'jade/*.jade'],
        tasks: ['jade'],
        options: {
            spawn: false,
        }
    },
    css: {
        files: ['css/*.css', 'css/*.scss', 'css/*.sass', 'css/_parts/*.scss', 'css/_parts/*.sass'],
        tasks: ['sass', 'csscomb', 'autoprefixer', 'cssmin'],
        options: {
            spawn: false,
        }
    },
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
            spawn: false,
        }
    }
}