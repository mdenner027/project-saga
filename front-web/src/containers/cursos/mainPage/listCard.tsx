import React from 'react';
import { CursoListItem } from '../../../types/cursoTypes';
import Rows from './rows';
import TabelaCurso from './tabelaCurso';

type Props = {
    cursos: CursoListItem[];
}
export default function ListCard({ cursos }: Props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Cursos Registrados</h4>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12">
                            <TabelaCurso cursos={cursos}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}