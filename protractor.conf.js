// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


exports.config = {
  allScriptsTimeout: 22000,
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  // Specs here are the cucumber feature files
  specs: [
    // './e2e/_example/features/*.feature',
    './e2e/features/**/*.feature'
  ],

  // Use a custom framework adapter and set its relative path
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // cucumber command line options
  cucumberOpts: {
    // require step definition files before executing features
    require: [
      // './e2e/_example/steps/**/*.ts',
      './e2e/steps/**/*.ts',
    ],
    // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    // tags: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: [
      // 'pretty',
      // 'pretty:reports/summary.txt',
      'json:reports/summary.json'
    ],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    compiler: []
  },

  // Enable TypeScript for the tests
  onPrepare() {
    console.log('------- Preparing')
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onComplete() {
    console.log('------- Completed')
  },
  onCleanUp: () => {
    console.log('------- Cleaned up');
  },
  afterLaunch: () => {
    console.log('------- Launched');
  }
};
