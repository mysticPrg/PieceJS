var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');
var Server = require('karma').Server;
var coveralls = require('gulp-coveralls');
var jsdoc = require("gulp-jsdoc");
var jshint = require('gulp-jshint');

gulp.task('default', ['build']);

gulp.task('doc', function() {
    del([
        'doc'
    ], function() {
        gulp.src("src/*.js")
            .pipe(jsdoc('./doc'));
    });
});

gulp.task('test', ['clean', 'jshint'], function (done) {
    new Server({
        singleRun: true,
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('travis-test', ['clean', 'jshint'], function (done) {
    new Server({
        singleRun: true,
        configFile: __dirname + '/karma.conf.js',
        browsers: ['PhantomJS']
    }, done).start();
});

gulp.task('coveralls', function() {
    gulp.src('coverage/**/lcov.info')
        .pipe(coveralls());
});

gulp.task('jshint', ['clean'], function() {
    return gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('build', ['clean', 'jshint', 'test', 'amdclean', 'uglify']);

gulp.task('clean', function (done) {
    del([
        'dist',
        'coverage'
    ], done);
});

gulp.task('amdclean', ['clean', 'jshint', 'test'], function (done) {
    var requirejs = require('requirejs');

    requirejs.optimize({
        'findNestedDependencies': true,
        'baseUrl': './src/',
        'optimize': 'none',
        'include': ['main'],
        'out': './dist/PieceJS.js',
        'onModuleBundleComplete': function (data) {
            var fs = require('fs'),
                amdclean = require('amdclean'),
                outputFile = data.path;

            fs.writeFileSync(outputFile, amdclean.clean({
                'filePath': outputFile
            }));

            done();
        }
    });
});

gulp.task('uglify', ['clean', 'jshint', 'test', 'amdclean'], function () {
    return gulp.src('dist/PieceJS.js')
        .pipe(uglify())
        .pipe(concat('PieceJS.min.js'))
        .pipe(gulp.dest('dist/'));
});