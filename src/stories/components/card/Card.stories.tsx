import type { Meta, StoryObj } from "@storybook/react";
import Card from "../../../components/card/Card";
import { RecoilRoot } from "recoil";
import { HashRouter, Link } from "react-router-dom";
import cardImage1 from "../../../assets/images/all-img/card-1.png";
import cardImage2 from "../../../assets/images/all-img/card-2.png";
import cardImage3 from "../../../assets/images/all-img/card-3.png";
import Button from "../../../components/button/Button";
import {
  cards,
  cardsColor1,
  cardsColor2,
} from "../../../pages/example/components/card/CardPage";
import Icon from "../../../components/icons/Icon";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    componentSubtitle: "카드",
    docs: {
      description: {
        component: "정보를 시각적으로 그룹화하고 표시할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    bodyClass: {
      description: "내부 스타일",
    },
    children: {
      description: "자식 요소",
    },
    className: {
      description: "카드 스타일",
    },
    headerslot: {
      description: "헤더슬롯 요소",
    },
    noborder: {
      description: "헤더 구분선 여부",
    },
    subtitle: {
      description: "부제목",
    },
    title: {
      description: "제목",
    },
    titleClass: {
      description: "제목 스타일",
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    subtitle: "Subtitle",
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
};

// Basic Cards
export const BasicCards: Story = () => (
  <div className="grid grid-cols-2 gap-6">
    <Card title="Card Title" subtitle="Card Subtitle" noborder>
      <div className="h-[140px] w-full mb-6">
        <img
          src={cardImage1}
          alt=""
          className="block object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="text-sm">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
        tempor incididun ut .
      </div>
      <div className="mt-4 space-x-4 rtl:space-x-reverse">
        <Link to="#" className="btn-link">
          Learn more
        </Link>
        <Link to="#" className="btn-link">
          Another link
        </Link>
      </div>
    </Card>
    <Card bodyClass="p-0">
      <div className="h-[140px] w-full">
        <img
          src={cardImage2}
          alt=""
          className="block object-cover w-full h-full rounded-t-md"
        />
      </div>
      <div className="p-6">
        <header className="mb-8">
          <div className="card-title">Card Title</div>
          <div className="card-subtitle">Card Subtitle</div>
        </header>
        <div className="text-sm">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
          eiusmod tempor incididun ut .
        </div>
        <div className="mt-6 space-x-4 rtl:space-x-reverse">
          <Link to="#" className="btn-link">
            Learn more
          </Link>
          <Link to="#" className="btn-link">
            Another link
          </Link>
        </div>
      </div>
    </Card>
    <Card bodyClass="p-0  relative z-[1]  rounded-md" noborder>
      <div className="  absolute left-0 top-0 w-full h-full rounded-md z-[-1] ">
        <img
          src={cardImage3}
          alt=""
          className="block object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="p-6">
        <header className="mb-5">
          <div className="text-white card-title">Card Title</div>
        </header>

        <div className="text-white mt-[70px]">
          <div className="mb-2 text-sm text-white">This is a subtitle</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut .
          </div>
        </div>
        <div className="mt-[71px]">
          <Button
            text="Learn more"
            link="#"
            className="bg-white btn text-slate-800"
          />
        </div>
      </div>
    </Card>
  </div>
);
BasicCards.args = {
  ...BasicCards.args,
};

// Pill Cards
export const PillCards: Story = () => (
  <div className="grid grid-cols-2 gap-6">
    {cardsColor1.map((item, i) => (
      <Card
        title={item.title}
        className={`${item.bg} dark:${item.bg}`}
        titleClass="text-white"
        key={i}
        noborder
      >
        <div className="text-sm text-white">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
          eiusmod tempor incididun ut labore et dolor magna aliqua.
        </div>
      </Card>
    ))}
  </div>
);
PillCards.args = {
  ...PillCards.args,
};

// Outline Cards
export const OutlineCards: Story = () => (
  <div className="grid grid-cols-2 gap-6">
    {cardsColor2.map((item, i) => (
      <Card
        title={item.title}
        className={`ring-1 ${item.ring}`}
        key={i}
        noborder
      >
        <div className="text-sm">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
          eiusmod tempor incididun ut labore et dolor magna aliqua.
        </div>
      </Card>
    ))}
  </div>
);
OutlineCards.args = {
  ...OutlineCards.args,
};

// Icon Cards
export const IconCards: Story = () => (
  <div className="grid grid-cols-2 gap-6">
    {cards.map((item, i) => (
      <Card bodyClass="p-0" key={i} noborder>
        <header
          className={`border-b px-4 pt-4 pb-3 flex items-center  ${item.border}`}
        >
          <span
            className={`text-3xl inline-block ltr:mr-2 rtl:ml-2 ${item.color}`}
          >
            <Icon icon={item.icon} />
          </span>
          <h6 className={`card-title mb-0 ${item.color}`}>{item.title}</h6>
        </header>
        <div className="px-5 py-3">
          <div className="mb-2 card-title2">Card title</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut labore et dolor magna aliqua.
          </div>
        </div>
      </Card>
    ))}
  </div>
);
IconCards.args = {
  ...IconCards.args,
};
