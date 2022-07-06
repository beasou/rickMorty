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
            width: 150px;
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
            align-items: center;
            width: 100%;
            height: 50px;
            margin-top: 5px;
            font-size: 1.3rem;
            
        }
    }

    a{
        color: #fff;
        text-decoration: none;
    }
`