import {Container} from './style'

export function Form(){
    return( 
    <Container>
        <form>
            <fieldset>
                <legend>Fórmulário</legend>
                <p>
                    <label>Filter by name...</label>
                    <input type="text"/>
                </p>
                <p>
                    <label>Species</label>
                    <select name="species" id="species"></select>
                </p>
                <p>
                    <label>Gender</label>
                    <select name="gender" id="gender"></select>
                </p>
                <p>
                    <label>Status</label>
                    <select name="status" id="status"></select>
                </p>
                
            </fieldset>
        </form>
    </Container>
    )
}