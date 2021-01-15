import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AtendimentosMain from './pages/atendimentos/mainPage';
import CadastraCurso from './pages/cursos/adicionaCurso';
import CursosMain from './pages/cursos/mainPage';
import DemandasMain from './pages/demandas/mainPage';
import CadastraDiscente from './pages/discentes/adiconaDiscente';
import DiscentesMain from './pages/discentes/mainPage';
import EncaminhamentosMain from './pages/encaminhamentos/mainPage';
import Home from './pages/home';
import TiposMain from './pages/tipos/mainPage';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/cadastrar-discente" component={CadastraDiscente} />
                <Route path="/registro-de-discentes" component={DiscentesMain} />

                <Route path="/registro-de-atendimentos" component={AtendimentosMain} />
                
                <Route path="/registro-de-cursos" component={CursosMain} />
                <Route path="/cadastrar-curso" component={CadastraCurso} />

                <Route path="/registro-de-demandas" component={DemandasMain} />
                <Route path="/registro-de-tipos" component={TiposMain} />
                <Route path="/registro-de-encaminhamentos" component={EncaminhamentosMain} />
            </Switch>
        </BrowserRouter>
    );
}