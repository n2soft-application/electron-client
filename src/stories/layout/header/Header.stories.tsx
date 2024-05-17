import type { Meta, StoryObj } from "@storybook/react";
import Header from "../../../components/layout/Header";
import { RecoilRoot } from "recoil";
import { HashRouter } from "react-router-dom";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "centered",
    componentSubtitle: "헤더",
    docs: {
      description: {
        component:
          "사용자에게 웹 페이지의 상단에서 앱을 탐색하고 상호작용하는데 필요한 주요 요소를 제공합니다.",
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
        <HashRouter>
          <div className="w-[600px]">
            <Story />
          </div>
        </HashRouter>
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { tabMenu: [] },
};
