import {Container, Content, Button} from './style'

export function Form(){
    return( 
    <Container>
        <form>
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
                <Button>
                    <button>Loading ..</button>
                </Button>
            
        </form>
        
    </Container>
    )
}