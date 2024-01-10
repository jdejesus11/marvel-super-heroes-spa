import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Paginator, PaginatorProps } from "./Paginator";
import { faker } from "@faker-js/faker";

describe("Given a paginator with pages", () => {
  let props: PaginatorProps;
  let onPageChange: jest.Mock;
  describe("When it is mounted", () => {
    describe("And there is more than one page", () => {
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
            if (i == props.pages - 1) {
              expect(buttons[buttons.length - 1].disabled).toBe(true);
            }
          }
        });

        it("Then users can click and go backward sequentially", () => {
          render(<Paginator {...props} />);

          const buttons = document.querySelectorAll("button");
          for (let i = 0; i < props.pages; i++) {
            fireEvent.click(buttons[buttons.length - 1]);
          }

          for (let i = props.pages - 1; i >= 0; i--) {
            const currentButton = document.querySelector<HTMLButtonElement>("button[aria-current='true']");
            expect(currentButton).not.toBeNull();
            expect(currentButton.textContent).toBe((i + 1).toString());
            fireEvent.click(buttons[0]);
            if (i == 0) {
              expect(buttons[0].disabled).toBe(true);
            }
          }
        });

        it("Then users can click on the current page", () => {
          render(<Paginator {...props} />);
          const currentButton = document.querySelector<HTMLButtonElement>("button[aria-current='true']");
          fireEvent.click(currentButton);

          expect(onPageChange).toHaveBeenCalled();
        });
      });
    });

    describe("And there is just one page", () => {
      describe("And it is not disabled", () => {
        beforeEach(() => {
          onPageChange = jest.fn();
          props = {
            pages: 1,
            onPageChange: onPageChange,
            page: 0,
            ariaLabel: "paginator",
          };
        });

        it("Then users cannot click and go foward or backward sequentially", () => {
          render(<Paginator {...props} />);
          const buttons = document.querySelectorAll("button");
          expect(buttons[0].disabled).toBe(true);
          expect(buttons[buttons.length - 1].disabled).toBe(true);
        });
      });
    });
  });
});
