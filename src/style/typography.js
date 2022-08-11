import styled, { css } from "styled-components";
import BaseTitle from "../components/BaseTitle";

export const ThemeTitle = styled(BaseTitle)`
  font-family: "Inter", sans-serif;
  color: ${(props) => props.color};
  font-weight: 700;
  ${(props) => {
    switch (props.titleSize) {
      case "title1":
        return css`
          font-size: 26px;
        `;
      case "title2":
        return css`
          font-size: 16px;
          @media screen and (min-width: 768px) {
            font-size: 22px;
          }
        `;
      case "title3":
        return css`
          font-size: 18px;
        `;
      case "title4":
        return css`
          font-size: 18px;
          @media screen and (min-width: 768px) {
            font-size: 14px;
          }
        `;
      default:
        return false;
    }
  }}
`;

export const ThemeHeadline = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: var(--Grey-4);
`;
export const ThemeBody = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.color};

`;
export const ThemeBodyLink = styled.a`
    font-size: 14px;
    color: ${(props) => props.color};

`;
export const ThemeCaption = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: var(--Grey-3);
`;

