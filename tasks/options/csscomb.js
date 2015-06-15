module.exports = {
    dynamic_mappings: {
        expand: true,
        cwd: 'css/',
        src: ['*.css','*.pre.css', '!*.resorted.css'],
        dest: 'css/',
        ext: '.resorted.css'
    }
}