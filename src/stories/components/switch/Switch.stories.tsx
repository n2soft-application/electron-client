import type { Meta, StoryObj } from "@storybook/react";
import Switch from "../../../components/form/Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    componentSubtitle: "스위치",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(Story: any) => <Story includePrimary />],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Default",
  storyName: "",
  args: {
    value: true,
    onChange: () => {},
  },
};

export const allTypes: Story = () => (
  <>
    <Switch value={true} onChange={() => {}} />
    <Switch value={false} onChange={() => {}} />
  </>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 스위치 버튼입니다",
    },
  },
};
