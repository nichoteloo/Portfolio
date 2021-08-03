import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --blue-bg: #113a5d;
    --shades-blue-1: #34699a;
    --deep-blue: #00204a;
    --shades-blue-2: #65c6c4;
    --gray-1: #dfebed;
    --white: white;
    --black: black;
  }
  html{
    font-size: 8px;
    font-family: 'Roboto Mono';
    background-color: var(--blue-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--white);
    .scroll-content {
      background-color: var(--white);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index: 101;
      background: var(--white);
      .scrollbar-thumb-y {
        background: var(--white);
      }
    }
  }
`;
export default GlobalStyles;
