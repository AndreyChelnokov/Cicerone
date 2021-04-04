var gulp = require('gulp'),
    look = require('gulp-watch'),
    rigg = require('gulp-rigger'),
    sass = require('gulp-sass'),
    pref = require('gulp-autoprefixer'),
    ugly = require('gulp-uglify'),
    srcm = require('gulp-sourcemaps'),
    conc = require('gulp-concat'),
    smit = require('gulp.spritesmith'),
    imagemin = require('gulp-imagemin'),
    imgCompress = require('imagemin-jpeg-recompress'),
    merge = require('merge-stream'),
    font = require('gulp-ttf2woff2'),
    sync = require('browser-sync');

gulp.task('html', function(cb){
    gulp.src('src/*.html')
    .pipe(rigg())
    .pipe(gulp.dest('dist/'))
    .pipe(sync.stream());
    
    cb();
});

gulp.task('styles', function(cb) {
	return gulp.src(['src/scss/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed', includePaths: [__dirname + '/node_modules']}))
	.pipe(conc('styles.min.css'))
	.pipe(pref({grid: true, overrideBrowserslist: ['last 10 versions']}))
    .pipe(gulp.dest('dist/css/'))
    .pipe(sync.reload({stream: true}));

    cb();
});

gulp.task('ttf2woff2', function(){
    gulp.src(['src/fonts/*.ttf'])
        .pipe(font())
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('scripts', function (cb) {
    return gulp.src([
        'src/js/main.js',
    ])
    .pipe(rigg())
    .pipe(srcm.init())
    .pipe(conc('main.min.js'))
    .pipe(ugly())
    .pipe(srcm.write('main'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(sync.reload({stream: true}));

    cb();
});


// Optimize images
gulp.task('img', function() {
    return gulp.src('src/img/pictures/*.*')
    .pipe(imagemin([
      imgCompress({
        loops: 4,
        min: 70,
        max: 80,
        quality: 'high'
      }),
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('browser-sync', function(cb) {
    sync({
        server: {
            baseDir: 'dist'
        },
        notify: false,
        // online: false, // Work offline without internet connection
        //tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
    });

    cb();
});
function bsReload(done) { sync.reload(); done(); };

gulp.task('watch', function(cb) {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('styles'));
	gulp.watch(['src/js/main.js'], gulp.parallel('scripts'));
    gulp.watch('src/*.html', gulp.parallel('html'));
    
    cb();
});

gulp.task('default',  gulp.parallel('html', 'styles', 'img', 'browser-sync', 'watch')); //use 'ttf2woff2' at once
