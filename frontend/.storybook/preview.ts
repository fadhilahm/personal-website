import type { Preview } from '@storybook/react';
import '../app/[locale]/globals.css';

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
  },
};

export default preview;
