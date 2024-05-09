import type { Meta, StoryObj } from "@storybook/react";
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
        component:
          "사용자가 어떤 작업이 진행 중임을 알리거나 기다릴 때 사용됩니다.",
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
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
