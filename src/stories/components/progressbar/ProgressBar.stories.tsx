import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "../../../components/pregress/ProgressBar";
import Bar from "../../../components/pregress/Bar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    componentSubtitle: "프로그래스바",
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    title: {
      description: "제목",
    },
    className: {
      description: "스타일",
    },
    animate: {
      description: "애니메이션 여부",
    },
    showValue: {
      description: "값 표시 여부",
    },
    striped: {
      description: "줄 표시 여부",
    },
    value: {
      description: "비율 (단위: %)",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div className="w-[200px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    value: 20,
    backClass: "h-3 rounded-full",
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col w-full gap-6">
    <ProgressBar
      {...Default.args}
      className="bg-primary-500"
      value={60}
      showValue
    />
    <ProgressBar
      {...Default.args}
      className="bg-primary-500"
      value={60}
      striped
      animate
    />
    <ProgressBar {...Default.args} title="제목입니다.">
      <Bar value={18} className="bg-primary-500" showValue striped />
      <Bar value={33} className="bg-success-500" showValue striped />
      <Bar value={33} className="bg-danger-500" showValue striped />
    </ProgressBar>
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 프로그래스바입니다",
    },
  },
};
