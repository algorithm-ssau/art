import React from "react"
import {Switch, Route} from 'react-router-dom'
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import About from "./pages/About";

export function useRoutes(){
    return (
        <Switch>
            <Route path={"/"} exact>
                <Main></Main>
            </Route>
            <Route path={"/catalog"} exact>
               <Catalog></Catalog>
            </Route>
            <Route path={"/about"} exact>
                <About></About>
            </Route>
        </Switch>
    )
}