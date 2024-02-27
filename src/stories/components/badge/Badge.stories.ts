import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../../../components/badge/Badge";

const meta = {
  title: "Componets/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    componentSubtitle: "뱃지",
    docs: {
      description: {
        component: "추가 설명",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "뱃지 텍스트",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "badge",
    className: "text-white bg-danger-500",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 뱃지입니다",
      },
    },
  },
};
