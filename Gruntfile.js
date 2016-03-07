module.exports = function(grunt) {

    grunt.initConfig({
        bump: {
            options: {
                files: ['package.json', 'bower.json', 'juicy-composer.html'],
                commit: true,
                commitMessage: '%VERSION%',
                commitFiles: ['package.json', 'bower.json', 'juicy-composer.html'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                // pushTo: 'origin',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        },
        watch: {
            all: {
                options: {
                    livereload: true
                },
                files: [
                    '*.html',
                    'examples/**/*.html',
                    'test/*.js',
                    'test/*.html',
                    'test/**/*.html'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
