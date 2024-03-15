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
    title: "Card Title",
    subtitle: "Card Subtitle",
    noborder: true,
    children: (
      <>
        <div className="h-[140px] w-full mb-6 bg-slate-100 rounded" />
        <div className="text-sm">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
          eiusmod tempor incididun ut .
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "기본 카드입니다",
      },
    },
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-2">
    <Card title="Card Title" subtitle="Card Subtitle" noborder>
      <div className="h-[140px] w-full mb-6 bg-slate-100 rounded" />
      <div className="text-sm">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
        tempor incididun ut .
      </div>
    </Card>
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 카드입니다",
    },
  },
};
