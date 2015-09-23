// Generated on 2015-05-25 using generator-angular 0.11.1
'use strict';
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json')
            .appPath || 'app',
        dist: 'dist'
    };
    // Define the configuration for all the tasks
    grunt.initConfig({
        // Project settings
        yeoman: appConfig,
        phonegap: { // See https://github.com/logankoester/grunt-phonegap/blob/master/docs/overview.md
            config: {
                root: 'dist',
                config: 'config.xml',
                cordova: '.cordova',
                path: 'phonegap',
                plugins: [
                    'cordova-plugin-splashscreen',
                    'cordova-plugin-geolocation',
                    'cordova-plugin-network-information'
                ],
                platforms: ['android'],
                verbose: true,
                debuggable: true,
                key: {
                    store: 'YOUR_KEYSTORE_FILE.keystore',
                    alias: 'YOUR_KEYSTORE_ALIAS',
                    aliasPassword: function () {
                        // Prompt, read an environment variable, or just embed as a string literal
                        return ('YOUR_KEYSTORE_ALIAS_PASSWORD');
                    },
                    storePassword: function () {
                        // Prompt, read an environment variable, or just embed as a string literal
                        return ('YOUR_KEYSTORE_PASSWORD');
                    }
                },
                // Set an app icon at various sizes (optional)
                icons: {
                    android: {
                        ldpi: '<%= yeoman.app %>/res/icon/android/icon-36-ldpi.png',
                        mdpi: '<%= yeoman.app %>/res/icon/android/icon-48-mdpi.png',
                        hdpi: '<%= yeoman.app %>/res/icon/android/icon-72-hdpi.png',
                        xhdpi: '<%= yeoman.app %>/res/icon/android/icon-96-xhdpi.png'
                    },
                },
                // Android-only integer version to increase with each release.
                // See http://developer.android.com/tools/publishing/versioning.html
                versionCode: function () {
                    return 3;
                },
                minSdkVersion: function () {
                    return (10); // 14 for ver 4.x - https://developer.android.com/guide/topics/manifest/uses-sdk-element.html
                },
                targetSdkVersion: function () {
                    return (21);
                },
            }
        },
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                  '<%= yeoman.app %>/{,*/}*.html',
                  '.tmp/styles/{,*/}*.css',
                  '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [connect.static('.tmp'), connect()
                            .use('/<%= yeoman.app %>/bower_components', connect.static('./<%= yeoman.app %>/bower_components')), connect()
                            .use('/<%= yeoman.app %>/styles', connect.static('./<%= yeoman.app %>/styles')), connect.static(appConfig.app)];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [connect.static('.tmp'), connect.static('test'), connect()
                            .use('/<%= yeoman.app %>/bower_components', connect.static('./<%= yeoman.app %>/bower_components')), connect.static(appConfig.app)];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },
        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                  'Gruntfile.js',
                  '<%= yeoman.app %>/scripts/{,*/}*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },
        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git{,*/}*'
                      ]
                    }]
            },
            server: '.tmp'
        },
        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            server: {
                options: {
                    map: true,
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: /\.\.\//
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            }
        },
        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                  '<%= yeoman.dist %>/scripts/{,*/}*.js',
                  '<%= yeoman.dist %>/styles/{,*/}*.css',
                  '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                  '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },
        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: [
                  '<%= yeoman.dist %>',
                  '<%= yeoman.dist %>/images',
                  '<%= yeoman.dist %>/styles'
                ]
            }
        },
        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/scripts/scripts.js': [
        //         '<%= yeoman.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },
        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                      '*.{ico,png,txt}',
                      '.htaccess',
                      '*.html',
                      'views/{,*/}*.html',
                      'images/{,*/}*.{webp}',
                      'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: '<%= yeoman.app %>/bower_components/bootstrap/dist',
                    src: 'fonts/*',
                    dest: '<%= yeoman.dist %>'
                }, {
                    expand: true,
                    flatten: true,
                    dest: '<%= yeoman.dist %>/',
                    src: ['<%= yeoman.app %>/cordova.js', '<%= yeoman.app %>/manifest.webapp']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            cordovaAssetsPostBuild: {
                files: [{
                    src: 'YOUR_KEYSTORE_FILE.keystore',
                    dest: 'phonegap/platforms/android/......YOUR_KEYSTORE_FILE.keystore'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-ldpi-portrait.png',
                    dest: 'phonegap/platforms/android/res/drawable-ldpi/splash_portrait.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-ldpi-landscape.png',
                    dest: 'phonegap/platforms/android/res/drawable-ldpi/splash_landscape.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-mdpi-portrait.png',
                    dest: 'phonegap/platforms/android/res/drawable-mdpi/splash_portrait.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-mdpi-landscape.png',
                    dest: 'phonegap/platforms/android/res/drawable-mdpi/splash_landscape.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-hdpi-portrait.png',
                    dest: 'phonegap/platforms/android/res/drawable-hdpi/splash_portrait.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-hdpi-landscape.png',
                    dest: 'phonegap/platforms/android/res/drawable-hdpi/splash_landscape.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-xhdpi-portrait.png',
                    dest: 'phonegap/platforms/android/res/drawable-xhdpi/splash_portrait.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-xhdpi-landscape.png',
                    dest: 'phonegap/platforms/android/res/drawable-xhdpi/splash_landscape.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-xhdpi-portrait.png',
                    dest: 'phonegap/platforms/android/res/drawable/splash_portrait.png'
                }, {
                    src: '<%= yeoman.app %>/res/screen/android/screen-xhdpi-landscape.png',
                    dest: 'phonegap/platforms/android/res/drawable/splash_landscape.png'
                }]
            },
        },
        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
            'copy:styles'
          ],
            test: [
            'copy:styles'
          ],
            dist: [
            'copy:styles',
            'imagemin',
            'svgmin'
          ]
        },
        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },
        manifest: {
            dist: {
                options: {
                    preferOnline: true,
                    verbose: false,
                    timestamp: false,
                    hash: true,
                    basePath: '<%= yeoman.dist %>/'
                },
                src: '**/*.{ico,png,txt,json,js,css,html,gif,jpg,jpeg,svg,ttf,eot,woff}',
                dest: '<%= yeoman.dist %>/manifest.appcache'
            },
        }
    });
    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        grunt.task.run([
          'clean:server',
          'wiredep',
          'concurrent:server',
          'autoprefixer:server',
          'connect:livereload',
          'watch'
        ]);
    });
    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });
    grunt.registerTask('test', [
      'clean:server',
      'wiredep',
      'concurrent:test',
      'autoprefixer',
      'connect:test'
      // 'karma' // @FIXME enable unit testing
    ]);
    grunt.registerTask('build', [
      'clean:dist',
      'wiredep',
      'useminPrepare',
      'concurrent:dist',
      'autoprefixer',
      'concat',
      'ngAnnotate',
      'copy:dist',
      'cdnify',
      'cssmin',
      'uglify',
      'filerev',
      'usemin',
      'htmlmin'
      //'manifest:dist' //CHANGEME Enable during production
    ]);
    grunt.registerTask('default', [
      'newer:jshint',
      'test',
      'build'
    ]);
    grunt.registerTask('platform-build', [
        'default',
        'phonegap:build',
        'copy:cordovaAssetsPostBuild'
    ]);
    grunt.registerTask('run', [
        'platform-build',
        'phonegap:run'
    ]);
    grunt.registerTask('pg-build', [
        'phonegap:build',
        'copy:cordovaAssetsPostBuild'
    ]);
    grunt.registerTask('pg-run', [
        'pg-build',
        'phonegap:run'
    ]);
};