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
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "뱃지 텍스트",
    },
    icon: {
      description: "아이콘",
    },
    className: {
      description: "스타일",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "badge",
    className: "text-white bg-amber-500",
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      description: {
        story: "기본 뱃지입니다",
      },
    },
  },
};
