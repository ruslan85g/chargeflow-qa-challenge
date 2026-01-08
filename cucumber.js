module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['features/step_definitions/*.js', 'features/support/*.js'],
    // Use 'progress' instead of 'progress-bar' for CI environments
    format: [process.env.CI ? 'progress' : 'progress-bar', 'html:cucumber-report.html'],
    parallel: 1
  }
};