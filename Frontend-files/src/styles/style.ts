import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --purple-light: #7678ED;
    --purple-dark: #3D348B;
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

body {
    background-color:  #7678ED;
    font-family: 'Poppins', sans-serif;
    color: #fff;
}

#root {
    max-width: 110rem;
    margin: 0 auto;
}

`;
