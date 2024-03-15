import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../components/checkbox/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    componentSubtitle: "체크박스",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "설명",
    },
  },
  //   decorators: [
  //     (Story: any) => (
  //       <div style={{ margin: "3em" }}>
  //         <Story />
  //       </div>
  //     ),
  //   ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// const Hooks = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleOnChange = () => {
//     setIsChecked((prev) => !prev);
//   };
//   return (
//     <div>
//       <Checkbox
//         label="Button"
//         color="red"
//         defaultChecked={isChecked}
//         onChange={() => {
//           handleOnChange();
//         }}
//       />
//       {isChecked ? "선택" : "미선택"}
//     </div>
//   );
// };

export const Default: Story = {
  name: "Default", // 사이드바에 보이는 이름
  storyName: "",
  args: {
    id: "defaultCheckbox",
    label: "체크박스입니다.",
    value: true,
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" }, // 코드 보여짐 기본 상태
      description: {
        story: "기본 체크박스입니다",
      },
    },
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-6">
    <Checkbox {...Default.args} value={false} />
    <Checkbox {...Default.args} />
    <Checkbox disabled {...Default.args} />
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "기본 셀렉트입니다",
    },
  },
};
