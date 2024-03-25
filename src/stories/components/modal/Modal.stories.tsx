import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/button/Button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    componentSubtitle: "모달",
    docs: {
      description: {
        component:
          "사용자의 주의를 집중시켜야 할 작업이나 중요한 정보를 제공할 때 사용됩니다.",
      },
    },
  },
  argTypes: {
    className: {
      description: "스타일",
    },
    disableBackdrop: {
      description: "뒤 배경 여부",
    },
    centered: {
      description: "가운데 정렬 여부",
    },
    footerContent: {
      description: "하단 컨텐츠",
    },
    label: {
      description: "라벨",
    },
    labelClass: {
      description: "라벨 스타일",
    },
    onClose: {
      description: "닫을 때 이벤트",
    },
    title: {
      description: "제목",
    },
    noFade: {
      description: "fade 애니메이션 여부",
    },
    children: {
      description: "내용",
    },
    scrollContent: {
      description: "내용 y축 스크롤 여부",
    },
  },
  tags: ["autodocs"],
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    labelClass: "btn-outline-dark",
    uncontrol: true,
    children: (
      <>
        <h4 className="mb-3 text-lg font-medium text-slate-900">모달창</h4>
        <div className="text-base text-slate-600 dark:text-slate-300">
          내용입니다.
        </div>
      </>
    ),
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col items-center gap-6">
    <Modal
      {...Default.args}
      title="Modal"
      label="Modal (noFade/centered)"
      labelClass="btn-outline-primary"
      themeClass="bg-primary-500"
      noFade
      centered
    />
    <Modal
      {...Default.args}
      title="Modal"
      label="Modal (disableBackdrop)"
      labelClass="btn-outline-warning"
      themeClass="bg-warning-500"
      disableBackdrop
    />
    <Modal
      {...Default.args}
      title="Modal"
      label="Modal (footerContent)"
      labelClass="btn-outline-success"
      themeClass="bg-success-500"
      disableBackdrop
      footerContent={<Button text="Accept" className="btn-success" />}
    />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "모달 사용 예시입니다.",
    },
  },
};
