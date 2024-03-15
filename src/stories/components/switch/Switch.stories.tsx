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

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    label: "primary",
    activeClass: "bg-primary-500",
    value: true,
    onChange: () => {},
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-2">
    <Switch {...Default.args} label="primary" activeClass="bg-primary-500" />
    <Switch
      {...Default.args}
      label="primary disabled"
      activeClass="bg-primary-500"
      disabled
    />
    <Switch
      {...Default.args}
      label="secondary"
      activeClass="bg-secondary-500"
    />
    <Switch {...Default.args} label="success" activeClass="bg-success-500" />
    <Switch {...Default.args} label="danger" activeClass="bg-danger-500" />
    <Switch {...Default.args} label="warning" activeClass="bg-warning-500" />
    <Switch {...Default.args} label="info" activeClass="bg-info-500" />
  </div>
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
