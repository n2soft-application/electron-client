import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../components/checkbox/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    componentSubtitle: "체크박스",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "설명",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default", // 사이드바에 보이는 이름
  storyName: "",
  args: {
    id: "defaultCheckbox",
    label: "체크박스입니다.",
    value: true,
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-6">
    <Checkbox {...Default.args} value={false} />
    <Checkbox {...Default.args} />
    <Checkbox disabled {...Default.args} />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 체크박스입니다",
    },
  },
};
