import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getCursos } from '../../../api/cursoApi';
import { CursoListItem } from '../../../types/cursoTypes';
import Rows from './rows';

export default function TabelaCurso() {
    const [cursos, setCursos] = useState<CursoListItem[]>([]);
    useEffect(() => {
        getCursos()
            .then(response => setCursos(response.data))
            .catch(() => toast.error("Ops! Parece que não foi possível carregar os cursos cadastrados."));
    }, [cursos]);

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
                        <Rows curso={curso} key={curso.idCurso} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}