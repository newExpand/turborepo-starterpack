import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui";

const meta = {
  title: "컴포넌트/버튼",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "버튼",
    variant: "default",
    size: "default",
  },
};
