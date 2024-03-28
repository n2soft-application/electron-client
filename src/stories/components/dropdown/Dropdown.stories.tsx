import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../../../components/dropdown/Dropdown";
import Button from "../../../components/button/Button";
import { HashRouter } from "react-router-dom";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    componentSubtitle: "드롭다운",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    label: <Button text="Dropdown" />,
  },
};

export const allTypes: Story = () => (
  <div className="flex flex-col gap-10">
    <div className="space-xy-5">
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="primary"
            className="btn-primary"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="secondary"
            className="btn-secondary"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="success"
            className="btn-success"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="info"
            className="btn-info"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="warning"
            className="btn-warning"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="danger"
            className="btn-danger"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="Dark"
            className="btn-dark"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="Light"
            className="btn-light"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
    </div>
    <div className="space-xy-5">
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="primary"
            className="btn-outline-primary"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="secondary"
            className="btn-outline-secondary"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="success"
            className="btn-outline-success"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="info"
            className="btn-outline-info"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="warning"
            className="btn-outline-warning"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="danger"
            className="btn-outline-danger"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="Dark"
            className="btn-outline-dark"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="Light"
            className="btn-outline-light"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
    </div>
    <div className="space-xy-5">
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="primary"
            className="text-primary-500 hover:bg-primary-500 hover:bg-opacity-20"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="secondary"
            className="text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="success"
            className="text-success-500 hover:bg-success-500 hover:bg-opacity-20"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="info"
            className="text-info-500 hover:bg-info-500 hover:bg-opacity-20"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="warning"
            className="text-warning-500 hover:bg-warning-500 hover:bg-opacity-20"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="danger"
            className=" text-danger-500 hover:bg-danger-500 hover:bg-opacity-20"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="Dark"
            className="text-slate-800 hover:bg-slate-800 hover:bg-opacity-20"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
      <Dropdown
        classMenuItems="left-0 w-[220px] top-[110%]"
        label={
          <Button
            text="Light"
            className="text-slate-600 hover:bg-light hover:bg-opacity-10"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        }
      ></Dropdown>
    </div>
  </div>
);

allTypes.args = {
  ...allTypes.args,
};

allTypes.parameters = {
  docs: {
    description: {
      story: "Basic Dropdowns / Outline Dropdowns / Flat Dropdowns",
    },
  },
};
