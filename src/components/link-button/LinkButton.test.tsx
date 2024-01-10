import React from "react";
import { LinkButton, LinkButtonProps } from "./LinkButton";
import { render, screen } from "@testing-library/react";

describe("Given a link button", () => {
  describe("When it is mounted", () => {
    let onClickMock: jest.Mock;
    let props: LinkButtonProps;

    beforeEach(() => {
      onClickMock = jest.fn(() => {});
    })

    it("Then users can click on it", () => {
        props = {
          text: "Lorep Ipsum",
          onClick: onClickMock
        }
        render(<LinkButton {...props}></LinkButton>);
        screen.queryByText(props.text).click();
        expect(onClickMock).toHaveBeenCalled();
    });
  });
});
