var gulp = require('gulp');

gulp.task('default', function () {
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
        }
    });
});
