import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";
import Footer from "../../../components/layout/Footer";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
    componentSubtitle: "푸터",
    docs: {
      description: {
        component: "사용자에게 웹 페이지의 하단에서 필요한 정보를 제공합니다.",
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
  args: {},
};
