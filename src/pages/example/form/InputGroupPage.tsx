import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import Dropdown from "../../../components/dropdown";
import InputGroup from "../../../components/form/InputGroup";
import Icon from "../../../components/icons/Icon";

const InputGroupPage = () => {
    return (
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <Card title="Basic Inputs">
          <div className="space-y-3">
            <InputGroup
              type="text"
              prepend={<Icon icon="heroicons-outline:search" />}
            />
            <InputGroup
              type="text"
              append={<Icon icon="heroicons-outline:search" />}
            />
            <InputGroup
              type="text"
              append={<Icon icon="heroicons-outline:search" />}
              disabled
              placeholder="Disable Input Group"
            />
            <InputGroup
              type="text"
              prepend={<Icon icon="heroicons-outline:search" />}
              readOnly
              placeholder="Readonly Input Group"
            />
            <InputGroup
              type="text"
              label="password"
              id="ps-1"
              placeholder="Your password"
            />
            <InputGroup type="text" placeholder="Username" prepend="@" />
            <InputGroup
              type="text"
              placeholder="Recient’s username"
              append="@example.com"
            />
            <InputGroup
              type="text"
              prepend="https://example.com/users/"
              placeholder=""
            />
            <InputGroup type="text" prepend="$" placeholder="100" append="00." />
          </div>
        </Card>
        <div className="space-y-5 card-auto-height">
          <Card title="Sizing Options">
            <div className="space-y-2">
              <InputGroup
                label="Large"
                id="largesize"
                type="text"
                placeholder="Large Input"
                className="h-[52px]"
                prepend="@"
              />
              <InputGroup
                label="Default"
                id="defaultsize"
                type="text"
                placeholder="Default Input"
                prepend="@"
              />
              <InputGroup
                label="Small"
                id="smallsize"
                type="text"
                placeholder="Small Input"
                className="h-[32px] text-sm"
                prepend="@"
              />
            </div>
          </Card>
          <Card title="Horizontal Form Label Sizing">
            <div className="space-y-2">
              <InputGroup
                label="Large"
                id="largesize"
                type="text"
                placeholder="Large Input"
                className="h-[52px]"
                prepend="@"
                horizontal
              />
              <InputGroup
                label="Default"
                id="defaultsize"
                type="text"
                placeholder="Default Input"
                prepend="@"
                horizontal
              />
              <InputGroup
                label="Small"
                id="smallsize"
                type="text"
                placeholder="Small Input"
                className="h-[32px] text-sm"
                prepend="@"
                horizontal
              />
            </div>
          </Card>
        </div>
        <div className="col-span-1 xl:col-span-2">
          <Card title="Merged">
            <div className="space-y-3">
              <InputGroup
                type="text"
                merged
              />
              <InputGroup
                type="text"
                merged
              />
              <InputGroup
                type="text"
                label="password"
                id="ps-1"
                placeholder="Your password"
                merged
              />
              <InputGroup type="text" placeholder="Username" prepend="@" merged />
              <InputGroup
                type="text"
                placeholder="Recient’s username"
                append="@example.com"
                merged
              />
              <InputGroup
                type="text"
                prepend="https://example.com/users/"
                placeholder=""
                merged
              />
              <InputGroup
                type="text"
                prepend="$"
                placeholder="100"
                append="00."
                merged
              />
            </div>
          </Card>
        </div>
        <Card title="Input Groups With Buttons">
          <div className="space-y-5 ">
            <InputGroup
              type="text"
              placeholder="Button on right"
              append={<Button text="Go" className="btn-outline-dark " />}
            />
            <InputGroup
              type="text"
              placeholder="Button on both side"
              prepend={
                <Button
                  icon="heroicons-outline:search"
                  className="btn-outline-dark"
                />
              }
              append={<Button text="Search" className="btn-outline-dark" />}
            />
          </div>
        </Card>
        <Card title="Input Groups With Dropdown">
          <div className="space-y-5 ">
            <InputGroup
              type="text"
              placeholder="Button on right"
              prepend={
                <Dropdown
                  classMenuItems="left-0  w-[220px] top-[110%] "
                  className="h-full"
                  labelClass="h-full"
                  label={
                    <Button
                      text="primary"
                      className="btn-dark"
                      icon="heroicons-outline:chevron-right"
                      iconPosition="right"
                      div
                      iconClass="text-lg"
                    />
                  }
                />
              }
            />
            <InputGroup
              type="text"
              placeholder="Button on both side"
              prepend={
                <Dropdown
                  classMenuItems="left-0  w-[220px] top-[110%] "
                  className="h-full"
                  labelClass="h-full"
                  label={
                    <button className="btn btn-outline-dark btn-sm">
                      <span className="flex items-center justify-between">
                        <span className="flex-1 mr-2 text-lg">
                          <Icon icon="heroicons-outline:pencil" />
                        </span>
                        <span className="flex-none inline-block text-base">
                          <Icon icon="heroicons-outline:chevron-right" />
                        </span>
                      </span>
                    </button>
                  }
                />
              }
              append={
                <Dropdown
                  classMenuItems="right-0  w-[220px] top-[110%] "
                  className="h-full"
                  labelClass="h-full"
                  label={
                    <Button
                      text="Action"
                      className="btn-outline-dark btn-sm"
                      icon="heroicons-outline:chevron-right"
                      iconPosition="right"
                      div
                      iconClass="text-lg"
                    />
                  }
                />
              }
            />
          </div>
        </Card>
      </div>
    );
  };

  export default InputGroupPage;