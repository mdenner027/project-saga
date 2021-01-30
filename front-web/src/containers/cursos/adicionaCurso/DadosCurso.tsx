import React, { useState } from 'react';
import VoltarBotao from '../../../components/buttons/VoltarBotao';
import ConfirmarBotao from '../../../components/buttons/ConfirmarBotao';
import CodigoCursoInput from './CodigoCursoInput';
import NomeCursoInput from './NomeCursoInput';
import { CursoInsert } from '../../../types/cursoTypes';
import { postCurso } from '../../../api/cursoApi';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function DadosCurso() {
    const [nome, setNome] = useState("");
    const [codigo, setCodigo] = useState<number>(0);
    const [payload, setPayload] = useState<CursoInsert>();
    const history = useHistory();

    const handleNome = (value: string) => {
        setNome(value);
        setPayload({
            nomeCurso: value,
            codMecCurso: codigo
        });
    }
    const handleCodigo = (value: number) => {
        setCodigo(value);
        setPayload({
            codMecCurso: value,
            nomeCurso: nome
        });
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        postCurso(payload!).then(() => {
            toast.success("Wow! Curso cadastrado com sucesso!");
            history.push("/registro-de-cursos");
        }).catch(error => {
            toast.error("Ops! Não foi possível completar a operação");
            console.log("Esse foi o erro" + error);   
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="title">Cadastrar Curso</h5>
            </div>
            <div className="card-body">
                <form onSubmit={event => handleSubmit(event)}>
                    <fieldset>
                        <legend>Informações do Curso</legend>
                        <div className="row">
                            <CodigoCursoInput getCodigo={handleCodigo} />
                            <NomeCursoInput getNomeCurso={handleNome} />
                        </div>
                    </fieldset>
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <VoltarBotao link="/registro-de-cursos" />
                        <ConfirmarBotao
                            textoBotao="Cadastrar Curso"
                             />
                    </div>
                </form>
            </div>
        </div>
    );
}