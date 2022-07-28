import { Link } from "react-router-dom"
import { Form } from "../components/Form"
import { Header } from "../components/Header"

export const Locations = () =>{
    return(
        <>
            <Header />
            <hr />
            <Form />
            <Link to="/"> Back </Link>
        </>
    )
}