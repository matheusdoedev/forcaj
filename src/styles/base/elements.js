import { createGlobalStyle } from "styled-components";

import fonts from "../settings/fonts";
import breakpoints from "../tools/breakpoints";

const Elements = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${fonts.fontPrimary};
        font-weight: 700;
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2.25rem;
    }
    h3 {
        font-size: 1.5rem;
    }
    h4 {
        font-size: 1.125rem;
    }
    p {
        ${fonts.fontSecondary}
        line-height: 1.5em;
        max-width: 30em;
        font-weight: 400;
    }
    a {
        ${fonts.fontPrimary};
        font-weight: 500;
    }
    a,
    button,
    input,
    span {
        font-size: 1rem;
        line-height: 1em;
        font-weight: 400;
    }
    @media (${breakpoints.desktop}) {
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 3rem;
        }
        h3 {
            font-size: 2.25rem;
        }
        h4 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1.25rem;
        }
        a,
        button,
        input,
        span {
            font-size: 1.125rem;
        }
    }
    @media (${breakpoints.mobile}) {
        h1 {
            font-size: 2.25rem;
        }
        h2 {
            font-size: 1.5rem;
        }
        h3 {
            font-size: 1.125rem;
        }
        h4 {
            font-size: 1rem;
        }
        p {
            font-size: 0.875rem;
        }
        a,
        button,
        input,
        span {
            font-size: 0.875rem;
        }
    }
`;

export default Elements;
