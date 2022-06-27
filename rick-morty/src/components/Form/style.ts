import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-top: 40px;
    button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10%;
            height: 100%;

            font-size: 100%;
            
            border-radius: .5rem;
            border: inset 1px;
            
            background:  var(--green-100) ;
            filter: brightness(1);
            box-shadow: 2.5px .5px 3px #696969;
        }
        button:hover{
                background: var(--green);
                border-color: var(--green-100);
                
                box-shadow: 3px 2px 4px var(--green-100);;
                transition: 1s;
                
                filter: brightness(1.75);
        }
`

export const Container = styled.form `
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    form{
        padding: 40px;

        p{
            display: flex;
            align-items: center;
            padding: 30px;
            

            input{
                width: 100%;
                height: 50%;
                padding: 1px;

                font-size: 100%;
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
                font-size: 100%;
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
    }
`