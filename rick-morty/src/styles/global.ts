import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --green-100: #8DE285;
    --green: #4af727;
    --blue-100: #9ACEE8;
    --blue:#22A2BD;
    --background: #070715 ;
    --background-body: #060621;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width: 1088px){
        font-size: 93.75%; //15px
    }
    @media (max-width: 720px){
        font-size: 87.5%; //14px
    }
}

body{
    background: var(--background-body);
    -webkit-font-smoothing: antialiased;
}

body, input, button, p, select {
    font-family: 'Patrick Hand SC', cursive;
    font-weight: 400;
    color: #fff;
}

h1{
    color: var(--blue);
    -webkit-text-stroke: 1px var(--green);
    text-shadow: 0 0 3px var(--green-100);
    font-family: 'Creepster', cursive;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}


button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`
