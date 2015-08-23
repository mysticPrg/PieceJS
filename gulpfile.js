var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');
var Server = require('karma').Server;

gulp.task('default', ['build']);

gulp.task('test', function (done) {
    new Server({
        singleRun: true,
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('travis-test', function (done) {
    new Server({
        singleRun: true,
        configFile: __dirname + '/karma.conf.js',
        browsers: ['PhantomJS']
    }, done).start();
});

gulp.task('build', ['clean', 'amdclean', 'uglify']);

gulp.task('clean', function (done) {
    del([
        'dist/*',
        'coverage/*'
    ], done);
});

gulp.task('amdclean', ['clean'], function (done) {
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

gulp.task('uglify', ['amdclean'], function () {
    return gulp.src('dist/PieceJS.js')
        .pipe(uglify())
        .pipe(concat('PieceJS.min.js'))
        .pipe(gulp.dest('dist/'));
});