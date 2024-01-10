import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Paginator, PaginatorProps } from "./Paginator";
import { faker } from "@faker-js/faker";

describe("Given a paginator with pages", () => {
  let props: PaginatorProps;
  let onPageChange: jest.Mock;
  describe("When it is mounted", () => {
    describe("And it is not disabled", () => {
      beforeEach(() => {
        onPageChange = jest.fn();
        props = {
          pages: faker.number.int({ min: 2, max: 5 }),
          onPageChange: onPageChange,
          page: 0,
          ariaLabel: "paginator",
        };
      });

      it("Then users can click and go foward sequentially", () => {
        render(<Paginator {...props} />);

        const buttons = document.querySelectorAll("button");
        for (let i = 0; i < props.pages; i++) {
          const currentButton = document.querySelector<HTMLButtonElement>("button[aria-current='true']");
          expect(currentButton).not.toBeNull();
          expect(currentButton.textContent).toBe((i + 1).toString());
          fireEvent.click(buttons[buttons.length - 1]);
        }
      });

      it("Then users can click and go backward sequentially", () => {
        render(<Paginator {...props} />);

        const buttons = document.querySelectorAll("button");
        let currentButton = document.querySelector<HTMLButtonElement>("button[aria-current='true']");
        expect(currentButton).not.toBeNull();
        expect(currentButton.textContent).toBe("1".toString());
        fireEvent.click(buttons[buttons.length - 1]);

        currentButton = document.querySelector<HTMLButtonElement>("button[aria-current='true']");
        expect(currentButton).not.toBeNull();
        expect(currentButton.textContent).toBe("2".toString());
        fireEvent.click(buttons[0]);

        currentButton = document.querySelector<HTMLButtonElement>("button[aria-current='true']");
        expect(currentButton).not.toBeNull();
        expect(currentButton.textContent).toBe("1".toString());
      });

      it("Then users can click on the current page", () => {
        render(<Paginator {...props} />);
        const currentButton = document.querySelector<HTMLButtonElement>("button[aria-current='true']");
        fireEvent.click(currentButton);

        expect(onPageChange).toHaveBeenCalled();
      });
    });

    describe("And there is just one page", () => {
        it.todo("Then users cannot click on arrow buttons")
    })
  });
});

