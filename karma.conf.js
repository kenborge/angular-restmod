// Karma configuration
// Generated on Fri Aug 09 2013 14:14:35 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
		// libraries
		'bower_components/angular/angular.js',
        'bower_components/angular-inflector/dist/angular-inflector.js',
		'bower_components/angular-mocks/angular-mocks.js',

		// our app
        'src/module.js',
        'src/module/*.js',
        'src/plugins/*.js',

		// tests
		{ pattern: 'test/**/*spec.js', included: false },
        { pattern: 'README.md', included: false },

        'test/requirejs-main.js',
        { pattern: 'node_modules/text/text.js', included: false }
    ],

    // karma plugins
    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-osx-reporter'
    ],

    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['progress', 'osx'],


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false

  });
};
