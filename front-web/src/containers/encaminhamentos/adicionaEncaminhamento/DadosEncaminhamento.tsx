import VoltarBotao from '../../../components/buttons/VoltarBotao';
import React from 'react';
import ConfirmarBotao from '../../../components/buttons/ConfirmarBotao';
import NomeEncaminhaInput from './NomeEncaminhaInput';

export default function DadosEncaminhamento() {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="title">Cadastrar Encaminhamento</h5>
            </div>
            <div className="card-body">
                <form>
                    <fieldset>
                        <legend>Informações do Encaminhamento</legend>
                        <div className="row">
                            <NomeEncaminhaInput />
                        </div>
                    </fieldset>
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <VoltarBotao link="/registro-de-encaminhamentos" />
                        <ConfirmarBotao textoBotao="Cadastrar Encaminhamento" />
                    </div>
                </form>
            </div>
        </div>
    );
}