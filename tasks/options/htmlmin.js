module.exports = {
    dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: {
            'build/*.html': '*.html'
        }
    }
}