import React, { useState, useRef } from "react";
import Card from "../../../../components/card/Card";
import Modal from "../../../../components/modal/Modal";
import Button from "../../../../components/button/Button";
import STextinput from "../../../../components/form/STextInput";

const ModalPage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Card title="Basic Modal">
        <div className=" space-xy-5">
          <Modal
            title="Basic Modal"
            label="Basic Modal"
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
            </div>
          </Modal>
        </div>
      </Card>
      <Card title="Themes Modal">
        <div className=" space-xy-5">
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
            </div>
          </Modal>
        </div>
      </Card>
      <Card title="Size Modal">
        <div className=" space-xy-5">
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
            </div>
          </Modal>
        </div>
      </Card>
      <Card title="Form & Scrolling Modals">
        <div className=" space-xy-5">
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
              <STextinput
                label="Email"
                type="email"
                placeholder="Type your email"
              />
              <STextinput
                label="Password"
                type="password"
                placeholder="8+ characters, 1 capitat letter "
              />
            </div>
          </Modal>
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
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
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
              <br />
              <br />
              Oat cake ice cream candy chocolate cake chocolate cake cotton
              candy dragée apple pie. Brownie carrot cake candy canes bonbon
              fruitcake topping halvah. Cake sweet roll cake cheesecake cookie
              chocolate cake liquorice.
            </div>
          </Modal>
        </div>
      </Card>
    </div>
  );
};

export default ModalPage;
