import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: #fff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
  ul {
    list-style-type: none;
  }
`