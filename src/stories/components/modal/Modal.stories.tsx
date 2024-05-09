import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/button/Button";
import TextInput from "../../../components/form/TextInput";

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
    activeModal: {
      description: "",
    },
    themeClass: {
      description: "",
    },
    uncontrol: {
      description: "",
    },
  },
  tags: ["autodocs"],
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

// Basic Modal
export const BasicModal: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Modal
      title="Basic Modal"
      label="Basic Modal"
      labelClass="btn-outline-dark"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-dark"
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Vertically center"
      label="Vertically center"
      labelClass="btn-outline-dark"
      uncontrol
      centered
      footerContent={
        <Button
          text="Accept"
          className="btn-dark"
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Disabled backdrop"
      label="Disabled backdrop"
      labelClass="btn-outline-dark"
      uncontrol
      disableBackdrop
      footerContent={
        <Button
          text="Accept"
          className="btn-dark"
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Disabled animation"
      label="Disabled animation"
      labelClass="btn-outline-dark"
      uncontrol
      noFade
      footerContent={
        <Button
          text="Accept"
          className="btn-dark"
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
  </div>
);
BasicModal.args = {
  ...BasicModal.args,
};

// Themes Modal
export const ThemesModal: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Modal
      title="Primary"
      label="Primary "
      labelClass="btn-outline-primary"
      themeClass="bg-primary-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-primary "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Secondary"
      label="Secondary "
      labelClass="btn-outline-secondary"
      themeClass="bg-secondary-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-secondary "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Success"
      label="Success "
      labelClass="btn-outline-success"
      themeClass="bg-success-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-success "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="info"
      label="info "
      labelClass="btn-outline-info"
      themeClass="bg-info-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-info "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Warning"
      label="Warning "
      labelClass="btn-outline-warning"
      themeClass="bg-warning-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-warning "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Light"
      label="Light "
      labelClass="btn-outline-light"
      themeClass="bg-slate-600 text-slate-900"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="text-white bg-slate-600"
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
  </div>
);
ThemesModal.args = {
  ...ThemesModal.args,
};

// Size Modal
export const SizeModal: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Modal
      title="Extra small"
      label="Extra small"
      labelClass="btn-outline-dark"
      uncontrol
      className="max-w-xs"
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Small modal"
      label="Small modal"
      labelClass="btn-outline-dark"
      className="max-w-md"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Default modal"
      label="Default modal"
      labelClass="btn-outline-dark"
      uncontrol
      className="max-w-xs"
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Large modal"
      label="Large modal"
      labelClass="btn-outline-dark"
      uncontrol
      className="max-w-5xl"
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Extra large modal"
      label="Extra large modal"
      labelClass="btn-outline-dark"
      uncontrol
      className="max-w-fit"
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
  </div>
);
SizeModal.args = {
  ...SizeModal.args,
};

// Form Modal
export const FormModal: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Modal
      title="Login Form Modal"
      label="Login Form"
      labelClass="btn-outline-dark"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <div className="text-base text-slate-600 dark:text-slate-300">
        <TextInput label="Email" type="email" placeholder="Type your email" />
        <TextInput
          label="Password"
          type="password"
          placeholder="8+ characters, 1 capitat letter "
        />
      </div>
    </Modal>
  </div>
);
FormModal.args = {
  ...FormModal.args,
};

// Scrolling Modal
export const ScrollingModal: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Modal
      title="Scrolling Long Content Modal"
      label="Scrolling Long Content "
      labelClass="btn-outline-dark"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Scrollable Content Modal"
      label="Scrollable Content"
      labelClass="btn-outline-dark"
      uncontrol
      scrollContent
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
  </div>
);
ScrollingModal.args = {
  ...ScrollingModal.args,
};
