import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui";

const meta = {
  title: "Example/Card",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "버튼이요",
  },
};
