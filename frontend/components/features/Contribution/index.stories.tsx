import type { Meta, StoryObj } from '@storybook/react';

import {Contribution} from './';

export default {
  title: 'Components/Contribution',
  component: Contribution,
} satisfies Meta<typeof Contribution>;

type Story = StoryObj<typeof Contribution>;

export const Default: Story = {};