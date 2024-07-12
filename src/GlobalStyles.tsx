/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
