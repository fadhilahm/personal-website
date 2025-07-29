import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@constants/theme';

import {Contribution} from './Contribution';

export default {
  title: 'Components/Contribution',
  component: Contribution,
  args: {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    theme: Theme.Dark,
    year: new Date().getFullYear(),
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Contribution>;

type Story = StoryObj<typeof Contribution>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A component that displays a user\'s GitHub contribution calendar.',
      },
    },
  },
};

export const LightTheme: Story = {
  args: {
    theme: Theme.Light,
  },
  parameters: {
    docs: {
      description: {
        story: 'GitHub contribution calendar with light theme.',
      },
    },
    backgrounds: {
      default: 'gray',
    },
  },
};

export const CustomYear: Story = {
  args: {
    year: 2024,
  },
  parameters: {
    docs: {
      description: {
        story: 'GitHub contribution calendar showing contributions from 2023.',
      },
    },
  },
};