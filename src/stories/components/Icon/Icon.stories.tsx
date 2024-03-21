import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../../../components/icons/Icon";
import { icons } from "../../../pages/example/icon/IconsPage";
import Tooltip from "../../../components/tooltip/Tooltip";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    componentSubtitle: "아이콘",
    docs: {
      description: {
        component:
          "추가적인 아이콘은 https://icon-sets.iconify.design/ 에서 찾아볼 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    icon: "heroicons:user-circle",
    className: "text-4xl",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 아이콘입니다",
      },
    },
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-wrap gap-6">
    {icons.map((item, i) => (
      <div key={i}>
        <Tooltip placement="top" arrow content={item.name}>
          <div
            className={`rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xl py-3 px-4 shadow-base`}
          >
            <Icon icon={item.name} />
          </div>
        </Tooltip>
      </div>
    ))}
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "현재 프로젝트에서 사용 중인 아이콘 목록입니다.",
    },
  },
};
