import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../../../components/dropdown";

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
      <div>
        <p>menu1</p>
        <p>menu2</p>
      </div>
    ),
    classMenuItems: "",
    label: "dropdown",
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      description: {
        story: "기본 드롭다운입니다",
      },
    },
  },
};
