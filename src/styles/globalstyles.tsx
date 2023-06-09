import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  button {
      border: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export default GlobalStyle;
