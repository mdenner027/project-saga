import React, { useEffect, useState } from 'react';
import { CursoListItem } from '../../../types/cursoTypes';
import { getCursoById, putCurso } from '../../../api/cursoApi';
import { toast } from 'react-toastify';
import CodCursoAltera from './CodCursoAltera';
import ConfirmarBotao from '../../../components/buttons/ConfirmarBotao';
import NomeCursoAltera from './NomeCursoAltera';
import VoltarBotao from '../../../components/buttons/VoltarBotao';
import { useHistory } from 'react-router-dom';

type Props = {
    id: number;
}

export default function AlteraCurso({ id }: Props) {
    const [curso, setCurso] = useState<CursoListItem>(Object);
    const history = useHistory();
    useEffect(() => {
        getCursoById(id)
            .then(response => setCurso(response.data))
            .catch(() => toast.error("Ops! Algo de errado aconteceu."));
    }, [id]);
    const handleChangeCodMec = (value: number) => {
        setCurso({
            codMecCurso: Number.isNaN(value) ? 0 : value,
            idCurso: curso.idCurso,
            nomeCurso: curso.nomeCurso
        })
    }
    const handleChangeNome = (value: string) => {
        setCurso({
            codMecCurso: curso.codMecCurso,
            idCurso: curso.idCurso,
            nomeCurso: value
        })
    }

    const onSubmit = () => {
        putCurso(curso).then(() => {
            toast.success("Wow! Cadastro alterado com sucesso!");
            history.goBack();
        }).catch(err => {
            console.log(err);
            toast.error("Ops! Parece que alguma coisa deu errado.");
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="title">Alterar Curso id + {curso.codMecCurso}</h5>
            </div>
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <legend>Informações do Curso</legend>
                        <div className="row">
                            <CodCursoAltera curso={curso} handleChange={handleChangeCodMec} />
                            <NomeCursoAltera curso={curso} handleChange={handleChangeNome} />
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
                            textoBotao="Alterar Curso"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}