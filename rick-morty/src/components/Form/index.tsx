import {Container, Content } from './style'

export function Form(){
    return( 
    <Container>
            <Content>
                <p>
                    <input type="text" placeholder='Filter by name...'/>
                </p>
                <p>
                    <select name="species" id="species">
                        <option value="" selected hidden>Species</option>
                        <option value="">teste</option>
                    </select>
                </p>
               
                <p>
                    <select name="species" id="species">
                        <option value="" selected hidden>Gender</option>
                        <option value="">teste</option>
                    </select>
                </p>
                
                <p>
                    <select name="species" id="species">
                        <option value="" selected hidden >Status</option>
                        <option value="">teste</option>
                    </select>
                </p>
                </Content>
    </Container>
    )
}