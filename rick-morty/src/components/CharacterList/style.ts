import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    ul{
        width: 200vh;
        display: flex ;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
        
        li{
            width: 250px;
            margin: 20px;
            list-style: none;
            border-radius: .5rem;
            
        }
        img{
            width: 100%;
            border-radius: .5rem;
        }

        h2{
            display: flex;
            align-items: flex-start;
            height: 50px;
            font-size: 1.3rem;
        }
    }
    
    a{
        color: #fff;
        text-decoration: none;
    }
    
   
`