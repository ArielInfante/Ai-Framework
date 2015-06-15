module.exports = {
    options: {
        browsers: ['last 2 version']
    },
    multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css', //The source files are entered in the css folder
        dest: 'css/', //The output files are entered in the build/css file
        ext: '.pre.css'
    }
}