module.exports = {
    multiple: {
        command: [
            // To install dependencies, directories and/or files, just comment the ones you want or don't.
            'npm install grunt-contrib-jshint --save-dev',
            'npm install grunt-contrib-uglify --save-dev',
            'npm install grunt-contrib-watch --save-dev',
            'npm install grunt-contrib-copy --save-dev',
            'npm install grunt-contrib-concat --save-dev',
            'npm install grunt-contrib-cssmin --save-dev',
            //'npm install grunt-contrib-connect --save-dev',
            // 'npm install grunt-contrib-imagemin --save-dev',
            'npm install grunt-contrib-htmlmin --save-dev',
            // 'npm install grunt-contrib-haml --save-dev',
            'npm install grunt-contrib-jade --save-dev',
            'npm install grunt-contrib-sass --save-dev',
            'npm install grunt-contrib-compress --save-dev',
            //'npm install grunt-svgmin --save-dev',
            'npm install grunt-autoprefixer --save-dev',
            'npm install grunt-csscomb --save-dev',
            // 'npm install grunt-mkdir --save-dev',
            //'npm install grunt-git --save-dev'
        ].join('&&')
    }
}