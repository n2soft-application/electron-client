import type { Meta, StoryObj } from "@storybook/react";
import Textinput from "../../../components/form/Textinput";

const meta = {
  title: "Components/Input",
  component: Textinput,
  parameters: {
    layout: "centered",
    componentSubtitle: "인풋",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Textinput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Default",
  storyName: "",
  args: {
    placeholder: "입력해주세요.",
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-2">
    <Textinput placeholder="입력해주세요." />
    <Textinput value="입력되었습니다." />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 인풋입니다",
    },
  },
};
