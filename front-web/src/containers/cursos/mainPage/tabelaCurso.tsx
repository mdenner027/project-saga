import React from 'react';
import { CursoListItem } from '../../../types/cursoTypes';
import Rows from './rows';

type Props = {
    cursos: CursoListItem[];
}

export default function TabelaCurso({ cursos }: Props) {
    return (
        <div className="table table-hover table-responsive">
            <table className="table">
                <thead className="text-primary">
                    <tr>
                        <th>
                            <b>Código MEC</b>
                        </th>
                        <th>
                            <b>Nome do curso</b>
                        </th>
                        <th>
                            <b><span className="d-flex justify-content-center">Alterar</span></b>
                        </th>
                        <th>
                            <b><span className="d-flex justify-content-center">Excluir</span></b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map(curso => (
                        <Rows
                            codigo={curso.codMecCurso}
                            nome={curso.nomeCurso}
                            key={curso.idCurso} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}