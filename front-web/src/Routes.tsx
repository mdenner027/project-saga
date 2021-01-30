import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AtendimentosMain from './containers/atendimentos/mainPage';
import CadastraCurso from './containers/cursos/adicionaCurso';
import CadastraDemanda from './containers/demandas/adicionaDemanda';
import CadastraDiscente from './containers/discentes/adiconaDiscente';
import CadastraEncaminhamento from './containers/encaminhamentos/adicionaEncaminhamento';
import CadastraTipo from './containers/tipos/adicionaTipo';
import CursosMain from './containers/cursos/mainPage';
import DemandasMain from './containers/demandas/mainPage';
import DiscentesMain from './containers/discentes/mainPage';
import EncaminhamentosMain from './containers/encaminhamentos/mainPage';
import Home from './containers/home';
import TiposMain from './containers/tipos/mainPage';
import ExibeCurso from './containers/cursos/exibeCurso';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/registro-de-atendimentos" component={AtendimentosMain} />

                <Route path="/cadastrar-discente" component={CadastraDiscente} />
                <Route path="/registro-de-discentes" component={DiscentesMain} />

                <Route path="/cadastrar-curso" component={CadastraCurso} />
                <Route path="/registro-de-cursos" component={CursosMain} />
                <Route path="/alterar-curso" component={ExibeCurso}/>

                <Route path="/cadastrar-demanda" component={CadastraDemanda} />
                <Route path="/registro-de-demandas" component={DemandasMain} />

                <Route path="/cadastrar-tipo-de-atendimento" component={CadastraTipo} />
                <Route path="/registro-de-tipos" component={TiposMain} />

                <Route path="/cadastrar-encaminhamento" component={CadastraEncaminhamento} />
                <Route path="/registro-de-encaminhamentos" component={EncaminhamentosMain} />
            </Switch>
        </BrowserRouter>
    );
}