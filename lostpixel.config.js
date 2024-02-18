/* eslint-disable no-undef */
/**
 * @type {import('lost-pixel').CustomProjectConfig}
 */
export default {
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  breakpoints: [1920],
  generateOnly: true,
  failOnDifference: true,
  threshold: 0.1,
};
