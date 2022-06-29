import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    ul{
        width: 100%;
        display: flex ;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
        li{
            width: 300px;
            margin: 20px;
            list-style: none;
        }
        img{
            width: 100%;
            border-radius: .5rem;
        }

        h2{
            width: 100%;
            margin-top: 10px;
        }
    }
    
   
`