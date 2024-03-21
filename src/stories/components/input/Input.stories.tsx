import type { Meta, StoryObj } from "@storybook/react";
import STextinput from "../../../components/form/STextInput";

const meta = {
  title: "Components/Input",
  component: STextinput,
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
} satisfies Meta<typeof STextinput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {},
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-2">
    <STextinput {...Default.args} label="라벨" />
    <STextinput
      {...Default.args}
      description="설명입니다."
      defaultValue="입력되었습니다."
    />
    <STextinput {...Default.args} defaultValue="입력되었습니다." readonly />
    <STextinput {...Default.args} defaultValue="입력되었습니다." disabled />
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
