import React from "react";
import { Button, ButtonProps } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Given a button", () => {
  describe("When it is mounted", () => {
    let onClickMock: jest.Mock;
    let props: ButtonProps;

    beforeEach(() => {
      onClickMock = jest.fn(() => {});
    })

    describe("And it is not disabled", () => {
      it("Then users can click on it", () => {
        props = {
          text: "View more",
          onClick: onClickMock
        }
        render(<Button {...props}></Button>);
        screen.getByRole("button").click();
        expect(onClickMock).toHaveBeenCalled();
      });
    });

    describe("And it is disabled", () => {
      it("Then users cannot click on it", () => {
        props = {
          text: "View more",
          onClick: onClickMock,
          disabled: true
        }
        render(<Button {...props}></Button>);
        screen.getByRole("button").click();
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });
  });
});
