import type { Meta, StoryObj } from "@storybook/react";
import Card from "../../../components/card/Card";
import { RecoilRoot } from "recoil";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    componentSubtitle: "카드",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story: any) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h4>test</h4>
        <p>card message</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      description: {
        story: "기본 카드입니다",
      },
    },
  },
};
