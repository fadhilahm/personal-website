import type { Preview } from '@storybook/react';

import '../app/[locale]/globals.css';
import { DEFAULT_LOCALE } from '../constants/i18n';
import nextIntl from './next-intl';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#6b7280',
        },
        {
          name: 'dark',
          value: '#232323',
        },
      ],
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
    nextIntl,
  },
};

export default preview;
