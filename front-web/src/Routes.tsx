import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AtendimentosMain from './pages/atendimentos/mainPage';
import CursosMain from './pages/cursos/mainPage';
import DemandasMain from './pages/demandas/mainPage';
import DiscentesMain from './pages/discentes/mainPage';
import EncaminhamentosMain from './pages/encaminhamentos/mainPage';
import Home from './pages/home';
import TiposMain from './pages/tipos/mainPage';

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
                <Route path="/registro-de-atendimentos">
                    <AtendimentosMain />
                </Route>
                <Route path="/registro-de-cursos">
                    <CursosMain />
                </Route>
                <Route path="/registro-de-demandas">
                    <DemandasMain />
                </Route>
                <Route path="/registro-de-tipos">
                    <TiposMain />
                </Route>
                <Route path="/registro-de-encaminhamentos">
                    <EncaminhamentosMain />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}