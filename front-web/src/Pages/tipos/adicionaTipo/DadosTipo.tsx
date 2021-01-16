import VoltarBotao from '../../../components/buttons/VoltarBotao';
import React from 'react';
import ConfirmarBotao from '../../../components/buttons/ConfirmarBotao';
import NomeTipoInput from './NomeTipoInput';

export default function DadosTipo() {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="title">Cadastrar Tipo de Atendimento</h5>
            </div>
            <div className="card-body">
                <form>
                    <fieldset>
                        <legend>Informações do Tipo de Atendimento</legend>
                        <div className="row">
                            <NomeTipoInput />
                        </div>
                    </fieldset>
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <VoltarBotao link="/registro-de-tipos" />
                        <ConfirmarBotao textoBotao="Cadastrar Tipo" />
                    </div>
                </form>
            </div>
        </div>
    );
}