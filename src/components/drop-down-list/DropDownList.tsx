import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { Illustrations } from "../../assets/index";

type Option = { key: string; value: string };

export interface DropDownListProps {
  options: Option[];
  defaultMessage?: string;
  defaultOptionIndex?: number;
  onChange?: (value: string) => void;
}

const BaseDropDownList = styled.div`
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${(props) => props.theme.regular};
  border: 1px solid ${(props) => props.theme.textColorOnSecondary};
  min-width: 100px;
`;

const StyledDropDownList = styled(BaseDropDownList)`
  position: relative;
  padding: 16px 16px;
  color: ${(props) => props.theme.textColorOnSecondary};
  &:disabled {
    background-color: ${(props) => props.theme.primaryDisabledButtonColor};
    cursor: not-allowed;
  }
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledOptionsList = styled.ul`
  background-color: ${(props) => props.theme.textColorOnTertiary};
  position: absolute;
  width: 100%;
  display: block;
  color: ${(props) => props.theme.textColorOnSecondary};
  border: 1px solid ${(props) => props.theme.textColorOnSecondary};
  border-top: 0;
`;

const StyledOptionsItem = styled.li`
  display: block;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnTertiary};
  }
`;

const StyledOptionsItemContent = styled.p`
  padding: 16px 16px;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const DownArrowIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const DropDownList: React.FC<DropDownListProps> = ({ options, defaultMessage, defaultOptionIndex, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(defaultOptionIndex != undefined ? options[defaultOptionIndex] : null);
  const [isVisible, setIsVisible] = useState(false);

  const [animation, api] = useSpring(() => ({
    opacity: 0,
    transform: `translateY(0)`,
  }));

  const showOptions = () => {
    api.start({
      opacity: !isVisible ? 1 : 0,
      transform: !isVisible ? "translateY(30)" : `translateY(0)`,
    });
  };

  const hideOptions = () => {
    api.start({
      opacity: 0,
      transform: `translateY(0)`,
    });
  };

  const onDropDownListClick = () => {
    showOptions();
    setIsVisible(!isVisible);
  };

  const onDropDownItemClick = (option: Option) => {
    if (!isVisible) {
      return;
    }
    hideOptions();
    setSelectedOption(option);
    setIsVisible(!isVisible);
    onChange?.(option.value);
  };

  return (
    <Container>
      <StyledDropDownList
        aria-controls="options"
        aria-expanded={isVisible ? "true" : "false"}
        aria-label="combo box"
        role="combobox"
        onClick={onDropDownListClick}
      >
        {selectedOption ? selectedOption.value : defaultMessage}
        <DownArrowIcon src={Illustrations.DownArrow} aria-hidden="true" />
      </StyledDropDownList>
      {isVisible && (
        <animated.div style={animation}>
          <StyledOptionsList id="options" role="listbox">
            {options &&
              options.map((option, index) => (
                <StyledOptionsItem role="option" key={index} onClick={() => onDropDownItemClick(option)}>
                  <StyledOptionsItemContent>{option.value}</StyledOptionsItemContent>
                </StyledOptionsItem>
              ))}
          </StyledOptionsList>
        </animated.div>
      )}
    </Container>
  );
};
