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

  h1, h2, p, span, a, .tecnologies, button {
    font-family: 'Source Code Pro', monospace;
    color: ${({ theme }) => theme.COLORS.WHITE};
    line-height: 150%;
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
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`