import styled from "styled-components"

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;

margin-top: 10px;
button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 100%;

        font-size: 1.5rem;
        
        border-radius: .5rem;
        border: inset 1px;
        
        background:  var(--green-100) ;
        box-shadow: 2.5px .5px 3px #696969;

        margin-bottom: 40px;
    }
    button:hover{
            background: var(--green);
            border-color: var(--green-100);
            filter: blur(.5px);
            box-shadow: 3px 2px 4px var(--green-100);;
            transition: .5s;
    }
`