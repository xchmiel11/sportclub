import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body, main, nav, footer, div, h1, h2, p, a, ul, li, img, label, input, button {
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        background-color: ${Colors.white};
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: 8px;

        &-track {
            background: ${Colors.white};
        }

        &-thumb {
            background: #888;

            &:hover {
                background: #555;
            }
        }
    }
`;
