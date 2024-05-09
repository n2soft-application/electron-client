import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";
import { HashRouter } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";

const meta = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    // layout: "centered",
    componentSubtitle: "사이드바",
    docs: {
      description: {
        component:
          "사용자에게 웹 페이지의 측면에서 메뉴 항목이 표시되어 사용자가 빠르게 탐색하고 작업할 수 있도록 합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story: any) => (
      <RecoilRoot>
        <HashRouter>
          <Story />
        </HashRouter>
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 1600,
      },
    },
  },
};
