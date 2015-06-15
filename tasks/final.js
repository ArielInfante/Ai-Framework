module.exports = function(grunt) {
    grunt.registerTask('final', ['jade', 'htmlmin', 'sass', 'cssmin', 'concat', 'uglify']);
}