import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../components/checkbox/Checkbox";

const meta = {
  title: "Componets/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    componentSubtitle: "체크박스",
    docs: {
      description: {
        component: "추가 설명",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "배경색",
    },
    extra: {
      description: "추가 스타일",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    color: "lime",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 체크박스입니다",
      },
    },
  },
};
