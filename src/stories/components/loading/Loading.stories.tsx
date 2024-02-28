import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../components/checkbox/Checkbox";
import Loading from "../../../components/loading/Loading";
import { RecoilRoot } from "recoil";

const meta = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
    componentSubtitle: "로딩",
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {},
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      description: {
        story: "기본 로딩입니다",
      },
    },
  },
};
