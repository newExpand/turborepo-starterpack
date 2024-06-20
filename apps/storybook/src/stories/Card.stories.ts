import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@repo/ui/card";

const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Card",
    children: "I am a primary button.",
    href: "#",
  },
};
