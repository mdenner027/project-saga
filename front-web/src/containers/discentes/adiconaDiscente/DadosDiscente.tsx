import React, { useState } from 'react';
import MatriculaInput from './MatriculaInput';
import NomeImput from './NomeInput';
import CursoInput from './CursoInput';
import RuaInput from './RuaInput';
import BairroInput from './BairroInput';
import NumeroInput from './NumeroInput';
import CidadeInput from './CidadeInput';
import ContatoInput from './ContatoInput';
import VoltarBotao from '../../../components/buttons/VoltarBotao';
import ConfirmarBotao from '../../../components/buttons/ConfirmarBotao';

export default function DadosDiscente() {
    const [numeroCasa, setNumeroCasa] = useState<string>('s');
    const handle = (n: string) => {
        setNumeroCasa(n);
    }
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="title">Cadastrar Discente {numeroCasa}</h5>
            </div>
            <div className="card-body">
                <form>
                    <fieldset>
                        <legend>Informações do Discente</legend>
                        <div className="row">
                            <NomeImput />
                            <MatriculaInput />
                            <CursoInput />
                        </div>
                        <div className="row">
                            <RuaInput />
                            <BairroInput />
                            <NumeroInput onChangeNumber={handle} />
                            <CidadeInput />
                        </div>
                        <div className="row">
                            <ContatoInput />
                        </div>
                    </fieldset>
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <VoltarBotao link="/registro-de-discentes"/>
                        <ConfirmarBotao textoBotao="Cadastrar Discente" />
                    </div>
                </form>
            </div>
        </div>
    );
}