import {Container, Content } from './style'

export function Form(){
    return( 
    <Container>
            <Content>
                <p>
                    <input type="text" placeholder='Filter by name...'/>
                </p>
                <p>
                    <select name="species" id="species" defaultValue="0">
                        <option value="0"  hidden>Species</option>
                        <option value="1">teste</option>
                    </select>
                </p>
               
                <p>
                    <select name="gender" id="gender" defaultValue="0">
                        <option value="0"  hidden>Gender</option>
                        <option value="1">female</option>
                        <option value="2">male</option>
                        <option value="3">genderless</option>
                        <option value="4">unknown</option>
                    </select>
                </p>
                
                <p>
                    <select name="status" id="status" defaultValue="0">
                        <option value="0"  hidden >Status</option>
                        <option value="1">alive</option>
                        <option value="2">dead</option>
                        <option value="3">unknown</option>
                    </select>
                </p>
                </Content>
    </Container>
    )
}