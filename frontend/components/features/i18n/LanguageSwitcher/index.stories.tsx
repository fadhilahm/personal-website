import type { Meta, StoryObj } from '@storybook/react';

import { DEFAULT_LOCALE, LANGUAGE_NAMES } from '@constants/i18n';

// Create a mock version of LanguageSwitcher for Storybook
function MockLanguageSwitcher() {
  return (
    <select className="select select-warning select-sm text-white">
      {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}

const meta = {
  title: 'Components/LanguageSwitcher',
  component: MockLanguageSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MockLanguageSwitcher>;

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