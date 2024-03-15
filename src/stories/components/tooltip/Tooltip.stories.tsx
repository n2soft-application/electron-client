import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../../../components/tooltip/Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    componentSubtitle: "툴팁",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "타이틀",
    },
    arrow: {
      description: "툴팁 꼬리",
    },
    placement: {
      description: "툴팁 방향",
    },
    className: {
      description: "스타일",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    title: "hover",
    content: "tooltip",
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col items-center gap-4">
    <Tooltip {...Default.args} title="tooltip top" placement="top" arrow />
    <Tooltip
      {...Default.args}
      title="tooltip bottom"
      placement="bottom"
      arrow
    />
    <Tooltip {...Default.args} title="tooltip left" placement="left" arrow />
    <Tooltip {...Default.args} title="tooltip right" placement="right" arrow />

    <Tooltip
      {...Default.args}
      title="tooltip not arrow"
      placement="bottom"
      arrow={false}
    />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 툴팁입니다",
    },
  },
};
