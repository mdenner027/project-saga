import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CursosMain from './Pages/Cursos';
import DiscentesMain from './Pages/Discentes';
import Home from './Pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/registro-de-discentes">
                    <DiscentesMain />
                </Route>
                <Route path="/registro-de-cursos">
                    <CursosMain />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}