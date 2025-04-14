import type { Meta, StoryObj } from '@storybook/react';

import StripedProgress from './';

const meta = {
  title: 'UI/StripedProgress',
  component: StripedProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StripedProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-60">
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-40">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'A smaller version of the StripedProgress component.',
      },
    },
  },
};

export const Large: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'A larger version of the StripedProgress component.',
      },
    },
  },
}; 