import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #24292E;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    color: #FFF;
  }

  #root {
    max-width: 1112px;
    margin: 0 auto;
    padding: 95px 20px 10px 20px;
  }

  h1 {
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;