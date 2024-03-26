import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "../../../components/form/Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    componentSubtitle: "텍스트 입력란",
    docs: {
      description: {
        component: "사용자가 긴 텍스트를 입력하거나 편집해야 할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "라벨",
    },
    className: {
      description: "스타일",
    },
    classGroup: {
      description: "",
    },
    placeholder: {
      description: "필드 임시 메시지",
    },
    description: {
      description: "설명",
    },
    icon: {
      description: "추가 아이콘",
    },
    horizontal: {
      description: "가로모드 여부",
    },
    validate: {
      description: "검증",
    },
    msgTooltip: {
      description: "하단 문구 툴팁 스타일 여부",
    },
    error: {
      description: "에러",
    },
    register: {
      description: "",
    },
    readOnly: {
      description: "읽기전용 여부",
    },
    disabled: {
      description: "비활성화 여부",
    },
    value: {
      description: "값",
    },
    cols: {
      description: "세로줄 수",
    },
    rows: {
      description: "가로줄 수",
    },
    name: {
      description: "",
    },
    onChange: {
      description: "입력시 이벤트",
    },
    ref: {
      description: "",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    cols: 50,
    label: "Textarea",
    id: "Textarea",
    placeholder: "입력해 주세요.",
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col items-center gap-4">
    <Textarea {...Default.args} horizontal />
    <Textarea {...Default.args} description="설명입니다." disabled />
    <Textarea {...Default.args} validate="이 상태는 유효합니다." msgTooltip />
    <Textarea
      {...Default.args}
      error={{
        message: "잘못된 상태입니다.",
      }}
    />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "사용 예시입니다.",
    },
  },
};
