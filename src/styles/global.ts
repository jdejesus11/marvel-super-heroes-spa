import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        font-size: 16px;
        font-family: ${Theme.primaryFont};
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        min-heigth: 100vh;
    }

    ul, ol {
        list-style-type: none;
    }

    ul, ol, p, button, span, main, div {
        margin:0;
        padding: 0;
    }

    button {
        border: none;
    }
`;
