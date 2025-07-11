import type { Meta, StoryObj } from '@storybook/react';

import { LANGUAGE_NAMES } from '@constants/i18n';

import LanguageSwitcher from './';

const meta = {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'centered',
    nextIntl: {
      locale: 'en',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `A language switcher component that supports ${Object.values(LANGUAGE_NAMES).join(', ')} languages.`,
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The LanguageSwitcher component with custom styling classes.',
      },
    },
  },
}; 