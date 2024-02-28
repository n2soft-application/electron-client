import type { Meta, StoryObj } from "@storybook/react";
import Header from "../../../components/layout/Header";
import { RecoilRoot } from "recoil";
import { HashRouter } from "react-router-dom";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    // layout: "centered",
    componentSubtitle: "헤더",
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
        <HashRouter>
          <Story />
        </HashRouter>
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Header>;

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
        story: "기본 헤더입니다",
      },
    },
  },
};
