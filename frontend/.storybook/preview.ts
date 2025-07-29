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
          name: 'dark',
          value: '#232323', // base-200 from your theme
        },
      ],
    },
    initialLocale: DEFAULT_LOCALE,
    nextIntl,
  },
};

export default preview;
