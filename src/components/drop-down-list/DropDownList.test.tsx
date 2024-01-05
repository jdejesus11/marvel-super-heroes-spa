import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DropDownList, DropDownListProps } from "./DropDownList";

describe("Given a drop down list", () => {
  let props: DropDownListProps;
  describe("When it is mounted", () => {
    describe("And it is not disabled", () => {
      describe("And users click on it", () => {
        it("Then any option from the list is visible and can be selected", () => {
          const onChangeMock = jest.fn();
          props = {
            options: [
              {
                key: "Asc",
                value: "Asc",
              },
              {
                key: "Des",
                value: "Des",
              },
            ],
            onChange: onChangeMock,
          };

          render(<DropDownList {...props} />);
          const combobox = screen.queryByRole("combobox");
          expect(combobox).not.toBeNull();

          fireEvent.click(combobox);
          expect(screen.queryByRole("listbox")).not.toBeNull();

          const options = screen.queryAllByRole("option", {});
          fireEvent.click(options[1]);

          expect(screen.queryByRole("listbox")).toBeNull();

          const text = screen.queryByText(props.options[1].value);
          expect(text).not.toBeNull();

          expect(onChangeMock).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe("And it is disabled", () => {
      describe("And users click on it", () => {
        it("Then any option from the list is not visible and cannot be selected", () => {
          const onChangeMock = jest.fn();
          props = {
            options: [
              {
                key: "Asc",
                value: "Asc",
              },
              {
                key: "Des",
                value: "Des",
              },
            ],
            onChange: onChangeMock,
            disabled: true,
          };

          render(<DropDownList {...props} />);

          const combobox = screen.queryByRole("combobox");
          expect(combobox).not.toBeNull();

          fireEvent.click(combobox);
          expect(screen.queryByRole("listbox")).toBeNull();

          const options = screen.queryAllByRole("option", {});
          expect(options.length).toEqual(0);

          expect(onChangeMock).not.toHaveBeenCalled();
        });
      });
    });
  });
});
