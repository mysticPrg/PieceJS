var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', ['build']);

gulp.task('build', ['amdclean', 'uglify']);

gulp.task('amdclean', function(done) {
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
    var uglifyOpt = {
        compress: true,
        output: {
            //source_map: true
        }
    };
    return gulp.src('dist/PieceJS.js')
        .pipe(uglify())
        .pipe(concat('PieceJS.min.js'))
        .pipe(gulp.dest('dist/'));
});