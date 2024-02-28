import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";
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
  decorators: [
    (Story: any) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    title: "hi",
    content: "hello",
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      description: {
        story: "기본 툴팁입니다",
      },
    },
  },
};
