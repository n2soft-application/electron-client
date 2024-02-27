import type { Meta, StoryObj } from "@storybook/react";
import Badges from "../../../components/badges/Badges";

const meta = {
  title: "Componets/Badges",
  component: Badges,
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
    color: {
      description: "배경색",
    },
    extra: {
      description: "추가 스타일",
    },
  },
} satisfies Meta<typeof Badges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    label: "badge",
    color: "lime",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 뱃지입니다",
      },
    },
  },
};
