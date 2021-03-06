import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    *,
    ul,
    ol,
    dl {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: initial;
        padding: 0.625rem;
    }
    a:hover,
    button:hover {
        cursor: pointer;
        text-decoration: none;
    }
    body {
        min-height: 100vh;
    }
    img {
        display: block;
        width: 100%;
    }
    ul {
        list-style: none;
    }
    fieldset {
        border: none;
    }
`;

export default Reset;
