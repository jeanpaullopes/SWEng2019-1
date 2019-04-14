'use strict';

// VARS
let dev = false;

// PLUGINS
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const image = require('gulp-image');
const internalIp = require('internal-ip');
const plumber = require('gulp-plumber');
const reload = browserSync.reload;
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const uglify = require('gulp-uglify');

// PATHS
const path = {
    publicAssets: './public/assets/',
    resourceAssets: './resources/assets/'
};

const sourcePath = {
    clean: [path.publicAssets + 'css', path.publicAssets + 'js', path.publicAssets + 'img'],
    cssCommon: [path.resourceAssets + 'scss/common/*.scss'],
    cssComponent: [path.resourceAssets + 'scss/component/*.scss'],
    cssLayout: [path.resourceAssets + 'scss/layout/*.scss'],
    image: [path.resourceAssets + 'img/**/*.gif', path.resourceAssets + 'img/**/*.jpg', path.resourceAssets + 'img/**/*.jpeg', path.resourceAssets + 'img/**/*.png'],
    imageSvg: [path.resourceAssets + 'img/svg/*.svg'],
    jsCommon: [path.resourceAssets + 'js/common/*.js'],
    jsComponent: [path.resourceAssets + 'js/component/*.js'],
    jsLayout: [path.resourceAssets + 'js/layout/*.js'],
    php: ['./resources/views/**/*.php']
};

const destPath = {
    cssCommon: path.publicAssets + 'css/common',
    cssComponent: path.publicAssets + 'css/component',
    cssLayout: path.publicAssets + 'css/layout',
    jsCommon: path.publicAssets + 'js/common',
    jsComponent: path.publicAssets + 'js/component',
    jsLayout: path.publicAssets + 'js/layout',
    image: path.publicAssets + 'img',
    imageSvg: path.publicAssets + 'img/svg'
};

// AUTOPREFIX CONFIG
const autoprefixerConfig = {
    browsers: ['last 2 versions'],
    cascade: false
};

// BABEL CONFIG
const babelConfig = {
    plugins: ['@babel/plugin-transform-modules-amd'],
    presets: ['@babel/preset-env']
};

// IMAGE CONFIG
const imageConfig = {
    optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
    pngquant: ['--speed=1', '--force', 256],
    zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
    jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 70],
    mozjpeg: ['-optimize', '-progressive'],
    guetzli: false,
    gifsicle: ['--optimize'],
    svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
};

// SASS CONFIG
const sassConfig = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

// SASS LINT CONFIG
const sassLintConfig = {
    configFile: '.sasslintrc'
};

// BROWSER SYNC
gulp.task('browser-sync', () => {
    browserSync.init({
        baseDir: './',
        host: internalIp.v4.sync(),
        proxy: {
            target: 'localhost.lippert.com'
        }
    });
});

// CLEAN
gulp.task('clean', () => {
    return gulp
        .src(sourcePath.clean, {
            read: false
        })
        .pipe(clean({ force: true }));
});

// CSS COMMON
gulp.task('css-common', () => {
    return gulp
        .src(sourcePath.cssCommon)
        .pipe(
            plumber({
                errorHandler: function(err) {
                    console.log('error: ', err);
                    this.emit('end');
                }
            })
        )
        .pipe(sassLint(sassLintConfig))
        .pipe(sassLint.format())
        .pipe(sass.sync(sassConfig).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerConfig))
        .pipe(gulp.dest(destPath.cssCommon))
        .pipe(browserSync.stream())
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log('css-common finalizado');
        });
});

// CSS COMPONENT
gulp.task('css-component', () => {
    return gulp
        .src(sourcePath.cssComponent)
        .pipe(
            plumber({
                errorHandler: function(err) {
                    console.log('error: ', err);
                    this.emit('end');
                }
            })
        )
        .pipe(sassLint(sassLintConfig))
        .pipe(sassLint.format())
        .pipe(sass.sync(sassConfig).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerConfig))
        .pipe(gulp.dest(destPath.cssComponent))
        .pipe(browserSync.stream())
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log('css-component finalizado');
        });
});

// CSS LAYOUT
gulp.task('css-layout', () => {
    return gulp
        .src(sourcePath.cssLayout)
        .pipe(
            plumber({
                errorHandler: function(err) {
                    console.log('error: ', err);
                    this.emit('end');
                }
            })
        )
        .pipe(sassLint(sassLintConfig))
        .pipe(sassLint.format())
        .pipe(sass.sync(sassConfig).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerConfig))
        .pipe(gulp.dest(destPath.cssLayout))
        .pipe(browserSync.stream())
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log('css-layout finalizado');
        });
});

// JS COMMON
gulp.task('js-common', () => {
    return gulp
        .src(sourcePath.jsCommon)
        .pipe(eslint.format('stylish'))
        .pipe(eslint.failAfterError())
        .pipe(babel(babelConfig))
        .pipe(gulpif(!dev, uglify()))
        .pipe(gulp.dest(destPath.jsCommon))
        .pipe(browserSync.stream())
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log('js-common finalizado');
        });
});

// JS COMPONENT
gulp.task('js-component', () => {
    return gulp
        .src(sourcePath.jsComponent)
        .pipe(eslint.format('stylish'))
        .pipe(eslint.failAfterError())
        .pipe(babel(babelConfig))
        .pipe(gulpif(!dev, uglify()))
        .pipe(gulp.dest(destPath.jsComponent))
        .pipe(browserSync.stream())
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log('js-component finalizado');
        });
});

// JS LAYOUT
gulp.task('js-layout', () => {
    return gulp
        .src(sourcePath.jsLayout)
        .pipe(eslint.format('stylish'))
        .pipe(eslint.failAfterError())
        .pipe(babel(babelConfig))
        .pipe(gulpif(!dev, uglify()))
        .pipe(gulp.dest(destPath.jsLayout))
        .pipe(browserSync.stream())
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log('js-layout finalizado');
        });
});

// IMAGE
gulp.task('image', () => {
    return gulp
        .src(sourcePath.image)
        .pipe(image(imageConfig))
        .pipe(gulp.dest(destPath.image))
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log('image finalizado');
        });
});

// SVG
gulp.task('image-svg', () => {
    return gulp
        .src(sourcePath.imageSvg)
        .pipe(image(imageConfig))
        .pipe(gulp.dest(destPath.imageSvg))
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log('image-svg finalizado');
        });
});

// CHANGE TO DEV
gulp.task('changeToDev', (done) => {
    dev = true;
    done();
});

// CHANGE TO PROD
gulp.task('changeToProd', (done) => {
    dev = false;
    done();
});

// WATCHS
gulp.task('watch-css-common', () => {
    gulp.watch(sourcePath.cssCommon, gulp.series('css-common'), (done) => {
        browserSync.reload();
        done();
    });
});

gulp.task('watch-css-component', () => {
    gulp.watch(sourcePath.cssComponent, gulp.series('css-component'), (done) => {
        browserSync.reload();
        done();
    });
});

gulp.task('watch-css-layout', () => {
    gulp.watch(sourcePath.cssLayout, gulp.series('css-layout'), (done) => {
        browserSync.reload();
        done();
    });
});

gulp.task('watch-js-common', () => {
    gulp.watch(sourcePath.jsCommon, gulp.series('js-common'), (done) => {
        browserSync.reload();
        done();
    });
});

gulp.task('watch-js-component', () => {
    gulp.watch(sourcePath.jsComponent, gulp.series('js-component'), (done) => {
        browserSync.reload();
        done();
    });
});

gulp.task('watch-js-layout', () => {
    gulp.watch(sourcePath.jsLayout, gulp.series('js-layout'), (done) => {
        browserSync.reload();
        done();
    });
});

gulp.task('watch-php', () => {
    gulp.watch(sourcePath.php).on('change', reload);
});

// ALL TASKS
gulp.task('all-tasks', gulp.parallel(['css-common', 'css-component', 'css-layout', 'js-common', 'js-component', 'js-layout', 'image', 'image-svg']));

// ALL WATCHS
gulp.task('all-watchs', gulp.parallel(['watch-css-common', 'watch-css-component', 'watch-css-layout', 'watch-js-common', 'watch-js-component', 'watch-js-layout', 'watch-php', 'browser-sync']));

// DEFAULT
gulp.task('default', gulp.series(['changeToDev', 'clean', 'all-tasks', 'all-watchs']));

// BUILD
gulp.task(
    'build',
    gulp.series(['changeToProd', 'clean', 'all-tasks'], (done) => {
        console.log('--- GULP ALL TASKS FINISH ---');
        done();
    })
);
