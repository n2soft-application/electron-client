import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../../../components/dropdown";
import Icon from "../../../components/icons/Icon";
import Button from "../../../components/button/Button";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    componentSubtitle: "드롭다운",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    children: (
      <div className="flex flex-col items-center duration-100 cursor-pointer">
        <div className="px-16 py-1 hover:bg-slate-100">
          <p>menu1</p>
        </div>
        <div className="px-16 py-1 hover:bg-slate-100">
          <p>menu2</p>
        </div>
        <div className="px-16 py-1 hover:bg-slate-100">
          <p>menu3</p>
        </div>
      </div>
    ),
    classMenuItems: "mt-2",
    label: (
      <Button
        text="Dropdown"
        className="btn-primary"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "기본 드롭다운입니다",
      },
    },
  },
};
