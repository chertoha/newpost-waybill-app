import { createGlobalStyle } from "styled-components";
import { theme } from "styles/theme";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: ${theme.fonts.montserrat};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.primaryText};

  background-color: #ffffff;
}



ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li {
  margin: 0;
  padding: 0;
}

input {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  transition: color ${(p) => p.theme.transitions.default};
}



button {
  cursor: pointer;
  background-color: transparent;
  border: none;   
  transition: background-color ${(p) => p.theme.transitions.default}, color ${(
  p
) => p.theme.transitions.default} ;
}
`;
