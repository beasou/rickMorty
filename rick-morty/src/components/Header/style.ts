import styled from 'styled-components'

export const Container = styled.header `
    height: 100px;
    background: var(--background);
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 10px 20px 10px 20px;
    font-size: 30px;

    .logo{
        display: flex;
        align-items: center;
        img{
            position: absolute;
            width: 150px;
        }
    }
    
    nav{
        display: flex;
        
        
        li{
            margin-left: 20px;
            list-style-type: none;
        }

        a{
            color: #FFF;
            text-decoration: none;
        }

        a:hover{
            color: var(--blue);
            -webkit-text-stroke: 1px var(--green);
            text-shadow: 0 0 3px var(--green-100);
            font-family: 'Creepster', cursive;
        }

    }
`