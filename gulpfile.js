const gulp = require('gulp');
const clean = require('gulp-clean');
const postcss = require('gulp-html-postcss');
const advancedVariables = require('postcss-advanced-variables');
const unprefix = require('postcss-unprefix');
const removePrefixes = require('postcss-remove-prefixes');
// const autoprefixer = require('autoprefixer');

gulp.task('clean-dest', function () {
  return gulp.src('./dest', { read: false, allowEmpty: true })
    .pipe(clean());
});

gulp.task('default', gulp.series('clean-dest', function () {
  const processors = [
    advancedVariables({
      unresolved: 'ignore', // ignore unresolved variables
    }),
    unprefix,
    removePrefixes,
    // autoprefixer,
  ];

  return gulp.src('./src/**/*.?(s)css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
}));
