import type { Meta, StoryObj } from "@storybook/react";
import Radio from "../../../components/form/Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    componentSubtitle: "라디오 버튼",
    docs: {
      canvas: { sourceState: "shown" },
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

export const Default: Story = (args: any) => (
  <>
    <Radio
      label="radio1"
      id="radio1"
      name="radio"
      value="radio1"
      checked={true}
      onChange={() => {}}
      {...args}
    />
    <Radio
      label="radio2"
      id="radio2"
      name="radio"
      value="radio2"
      checked={false}
      onChange={() => {}}
      {...args}
    />
  </>
);

Default.args = {
  ...Default.args,
};

Default.parameters = {
  docs: {
    canvas: { sourceState: "shown" },
    description: {
      story: "기본 라디오 버튼입니다",
    },
  },
};
