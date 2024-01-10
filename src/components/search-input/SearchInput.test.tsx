import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchInput } from "./SearchInput";
import { faker } from '@faker-js/faker';

describe("Given a search input", () => {
  describe("When it is mounted", () => {
    describe("And it is not disabled", () => {
      it("Then users can write characters on it", () => {
        const props = {
          placeholder: "",
          ariaLabel: "search input",
          onChange: jest.fn(),
        };
        render(<SearchInput {...props} />);

        const text = faker.lorem.paragraph();
        const input = screen.queryByLabelText(props.ariaLabel);
        fireEvent.change(input, { target: { value: text } });
        expect(screen.queryByDisplayValue(text)).not.toBeNull();
      });
    });
  });
});
