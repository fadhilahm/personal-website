import type { StorybookConfig } from '@storybook/nextjs';

const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || '';

console.log('githubUsername', githubUsername);

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-next-intl',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  env: config => ({
    ...config,
    NEXT_PUBLIC_GITHUB_USERNAME: githubUsername,
  }),
};
export default config;
