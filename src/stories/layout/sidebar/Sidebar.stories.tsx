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
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story: any) => (
      <RecoilRoot>
        <HashRouter>
          <div>
            <Story />
          </div>
        </HashRouter>
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {},
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
      //   canvas: { sourceState: "shown" },
      description: {
        story: "기본 사이드바입니다",
      },
    },
  },
};
