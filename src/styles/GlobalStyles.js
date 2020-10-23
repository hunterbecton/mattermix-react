import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: 16px;
      overflow: hidden;
    }

    html, body {
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        position: relative;
        background-color: ${(props) => props.theme.colors.black01};
        overflow-x: hidden;
        overflow-y: scroll;
    }

    a {
        text-decoration: none;
    }

    ::selection {
        background: ${(props) => props.theme.colors.blue01};
    }

    :focus {
        outline: 2px solid ${(props) => props.theme.colors.blue01};
        outline-offset: 2px;
    }

    div[id^="font-picker"] {
        width: 100%;
        box-shadow: none;
    }

    div[id^="font-picker"] .dropdown-button {
        font-size: 1rem;
        padding: 0.5rem;
        color: ${(props) => props.theme.colors.white01};
        background-color: ${(props) => props.theme.colors.black03};
        border-bottom: 1px solid ${(props) => props.theme.colors.white01};
        transition: ${(props) => props.theme.animations.field};
        min-height: 2.4375rem;
    }

    div[id^="font-picker"] .dropdown-button:hover, div[id^="font-picker"] .dropdown-button:focus {
        background-color: ${(props) => props.theme.colors.black03};
    }

    div[id^="font-picker"] .dropdown-button:focus {
        outline: 2px solid ${(props) => props.theme.colors.blue01};
        outline-offset: 2px;
    }

    div[id^="font-picker"] .dropdown-icon {
        display: none;
    }

    div[id^="font-picker"] .font-list {
        color: ${(props) => props.theme.colors.white01};
        background-color: ${(props) => props.theme.colors.black03};
    }

    div[id^="font-picker"] ul li button:hover, div[id^="font-picker"] ul li button:focus, div[id^="font-picker"] ul li button.active-font {
        background-color: ${(props) => props.theme.colors.black02};
    }

    .active--link {
        color: ${(props) => props.theme.colors.blue01} !important;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        :root {
            font-size: 14px
        }
    }

`;
