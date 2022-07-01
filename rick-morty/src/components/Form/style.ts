import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1120px;
    margin: 0 auto;
    
`

export const Container = styled.form `
    align-items: center;
    justify-content: center;
    font-size: 2rem;


        p{
            display: flex;
            align-items: center;
            padding: 30px;
            

            input{
                width: 100%;
                height: 50%;
                padding: 1px;

                font-size: 1.5rem;
                color: #fff;
                
                border-radius: .5rem;
                border: inset 1px;
                background: var(--background-body);
                box-shadow: 2.5px .5px 3px #696969;
            }
            input::placeholder{
                padding: 20px;
                color: #fff;
            }

            select{
                width: 100%;
                height: 50%; 
                padding: 1px;
                font-size: 1.5rem;
                color: #fff;
                               
                border-radius: .5rem;
                border: inset 1px;
                background: var(--background-body);
                box-shadow: 2.5px .5px 3px #696969;
            } 
            select:hover,input:hover{
                box-shadow: 2.5px .5px 3px #A9A9A9;
            }

        }
`
   
