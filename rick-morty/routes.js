import { Route, BrowserRouter } from "react-router-dom"

import Characters from "./src/pages/Characters"
import  Locations  from "./src/pages/Locations"

const PageRoutes = () => {
    return(
        <BrowserRouter>
            <Route component = {Characters} path = "/" exact />
            <Route component = {Locations} path = "/" exact />
        </BrowserRouter> 
    )
}