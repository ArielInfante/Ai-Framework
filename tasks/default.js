module.exports = function(grunt) {
    grunt.registerTask('default', ['jade', 'sass', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify']);
}