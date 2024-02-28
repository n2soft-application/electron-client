import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";
import Footer from "../../../components/layout/Footer";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    // layout: "centered",
    componentSubtitle: "푸터",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "스타일",
    },
  },
  decorators: [
    (Story: any) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Footer>;

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
        story: "기본 푸터입니다",
      },
    },
  },
};
