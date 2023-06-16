import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {text-decoration: none;
color: inherit;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus{ color: #277a9d} }
`;

