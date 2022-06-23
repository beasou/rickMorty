import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --green-text: #8DE285;
    --green: #4af727;
    --blue-text: #9ACEE8;
    --blue:#22A2BD;
    --background: #060620;
    --background-body: #070715;
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

`
