import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  h1, p, span, a {
    font-family: 'Source Code Pro', monospace;
  }

  p, span {
    font-size: 20px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  footer {
    font-family: 'Source Code Pro', monospace;
  }
`