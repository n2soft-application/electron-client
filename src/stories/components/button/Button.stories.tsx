import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../../components/button/Button";
import { HashRouter } from "react-router-dom";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "버튼",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    text: "Button",
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-4">
    <Button {...Default.args} />
    <Button {...Default.args} disabled />
    <Button {...Default.args} isLoading />
    <Button
      {...Default.args}
      icon="heroicons:chevron-right"
      iconPosition="right"
    />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 버튼입니다.",
    },
  },
};
