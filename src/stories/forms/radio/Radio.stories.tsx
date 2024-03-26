import type { Meta, StoryObj } from "@storybook/react";
import Radio from "../../../components/form/Radio";

const meta = {
  title: "Forms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    componentSubtitle: "라디오 버튼",
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
    className: {
      description: "스타일",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    id: "radio",
    label: "Label",
    name: "radio",
    checked: true,
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col">
    <Radio onChange={() => {}} {...Default.args} />
    <Radio onChange={() => {}} {...Default.args} checked={false} />
    <Radio disabled onChange={() => {}} {...Default.args} />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 라디오입니다",
    },
  },
};
