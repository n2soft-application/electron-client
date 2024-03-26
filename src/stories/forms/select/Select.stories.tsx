import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../../components/form/Select";

const meta = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
    componentSubtitle: "셀렉트",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Default",
  storyName: "",
  args: {
    options: [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ],
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-6">
    <Select label="라벨입니다." description="설명입니다." {...Primary.args} />
    <Select disabled {...Primary.args} />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 셀렉트입니다",
    },
  },
};
