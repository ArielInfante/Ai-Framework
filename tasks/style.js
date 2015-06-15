module.exports = function(grunt) {
    grunt.registerTask('style', ['sass', 'autoprefixer', 'cssmin']);
}