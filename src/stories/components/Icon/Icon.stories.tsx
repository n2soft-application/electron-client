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
          "사용자에게 간결하고 직관적으로 정보를 전달하거나 작업을 시각적으로 구분하고 표시할 때 사용됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      description: "너비",
    },
    rotate: {
      description: "회전",
    },
    hFlip: {
      description: "좌우 반전",
    },
    icon: {
      description: "아이콘",
    },
    className: {
      description: "스타일",
    },
    vFlip: {
      description: "상하 반전",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "heroicons:academic-cap",
    className: "text-4xl",
    rotate: 0,
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-wrap justify-center gap-4">
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
      story:
        "추가적인 아이콘은 https://icon-sets.iconify.design/ 에서 찾아볼 수 있습니다.",
    },
  },
};
