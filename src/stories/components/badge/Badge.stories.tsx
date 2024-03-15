import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../../../components/badge/Badge";

const meta = {
  title: "Components/Badge",
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
      description: "라벨",
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
  name: "Default",
  storyName: "",
  args: {
    label: "badge",
    className: "text-white bg-primary-500 text-center",
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col items-center gap-2">
    <Badge
      {...Default.args}
      label="slate"
      className={"text-white bg-slate-500 text-center"}
    />
    <Badge
      {...Default.args}
      label="primary"
      className={"text-white bg-primary-500 text-center"}
    />
    <Badge
      {...Default.args}
      label="danger"
      className={"text-white bg-danger-500 text-center"}
    />
    <Badge
      {...Default.args}
      label="warning"
      className={"text-white bg-warning-500 text-center"}
    />
    <Badge
      {...Default.args}
      label="info"
      className={"text-white bg-info-500 text-center"}
    />
    <Badge
      {...Default.args}
      label="success"
      className={"text-white bg-success-500 text-center"}
    />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 뱃지입니다",
    },
  },
};
