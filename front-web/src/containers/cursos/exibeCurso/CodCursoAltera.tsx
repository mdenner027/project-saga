import React from 'react';
import { CursoListItem } from '../../../types/cursoTypes';

type Props = {
    handleChange: (value: number) => void;
    curso: CursoListItem;
}

export default function CodCursoAltera({ handleChange, curso }: Props) {
    return (
        <div className="col-md-3 pr-1">
            <div className="form-group">
                <label htmlFor="codigoCurso">Codigo e-Mec</label>
                <input type="text"
                    required={true} id="codigoCurso"
                    value={curso.codMecCurso || 0}
                    onChange={event => handleChange(Number.parseInt(event.target.value))}
                    name="codigoCurso"
                    className="form-control"
                    maxLength={7}
                    placeholder="Ex.: 1122334" />
            </div>
        </div>
    );
}