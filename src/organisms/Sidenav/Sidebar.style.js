import { css } from "styled-components";

export const SidebarStyle = css`
  background-color: ${props => props.theme.colors.blackColor};
   .nav-heading {
    display: inline;
    padding: 10px;
    color: ${props => props.theme.colors.darkGreyColor};
  }
  .nav-list {
    padding-inline-start: 0px;
  }
  .nav-list li {
    list-style-type: none;
    margin: 0.5rem 0rem;
  }
`;

