import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../../../components/form/TextInput";

const meta = {
  title: "Components/Input",
  component: TextInput,
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
  argTypes: {},
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {},
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-2">
    <TextInput {...Default.args} label="라벨" />
    <TextInput
      {...Default.args}
      description="설명입니다."
      defaultValue="입력되었습니다."
    />
    <TextInput {...Default.args} defaultValue="입력되었습니다." readonly />
    <TextInput {...Default.args} defaultValue="입력되었습니다." disabled />
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
