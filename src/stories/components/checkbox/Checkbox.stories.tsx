import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../components/checkbox/Checkbox";

const meta = {
  title: "Componets/Checkbox",
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
    color: {
      description: "배경색",
    },
    extra: {
      description: "추가 스타일",
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
    color: "amber",
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

// export const Default2: Story = {
//   args: {
//     ...Default.args, // 인수사용
//   },
//   render: () => <Hooks />,
// };
