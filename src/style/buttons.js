import styled, { css } from "styled-components";

export const ThemeButton = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;

  border-radius: 8px;

  transition: 0.3s;

  ${(props) => {
    switch (props.buttonSize) {
      case "lg":
        return css`
          padding: 0px 20px;
          height: 60px;
          width: 100%;
        `;
      case "sm":
        return css`
          padding: 0px 20px;
          height: 40px;
        `;
      default:
        return false;
    }
  }}

  ${(props) => {
    switch (props.buttonStyle) {
      case "solid":
        return css`
          color: var(--White);
          background: var(--Green);
          border: 1px solid var(--Green);
          &:hover {
            filter: brightness(1.1);
          }
        `;
      case "outline":
        return css`
          color: var(--Grey-3);
          background: var(--Grey-1);
          border: 1px solid var(--Grey-1);
          &:hover {
            filter: brightness(1.1);
          }
        `;
      default:
        return false;
    }
  }}
`;
