import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteCurso } from '../../../api/cursoApi';
import DeletaButton from '../../../components/buttons/DeletaBotao';
import ExibeButton from '../../../components/buttons/ExibeBotao';
import { CursoListItem } from '../../../types/cursoTypes';

type Props = {
    curso: CursoListItem;
}

export default function Rows({ curso }: Props) {
    const history = useHistory();
    const handleClick = () => {
        history.push({
            pathname: "/alterar-curso",
            state: curso.idCurso
        });
    }

    const handleDeleteClick = () => {
        deleteCurso(curso.idCurso).then(() => {
            toast.success("Curso removido com sucesso!");
        })
            .catch(() => toast.error("Error!"));
    }
    return (
        <tr>
            <td>{curso.codMecCurso}</td>
            <td>{curso.nomeCurso}</td>
            <td>
                <ExibeButton onClick={handleClick} />
            </td>
            <td><DeletaButton handleClick={handleDeleteClick} /></td>
        </tr>
    );
}