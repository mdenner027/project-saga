import React from 'react';
import { CursoListItem } from '../../../types/cursoTypes';

type Props = {
    handleChange: (value: string) => void;
    curso: CursoListItem;
}

export default function NomeCursoAltera({ handleChange, curso }: Props) {
    return (
        <div className="col-md-9">
            <div className="form-group">
                <label htmlFor="nome">Nome do curso</label>
                <input type="text"
                    id="nome"
                    name="nomeCurso"
                    value={curso.nomeCurso || ""}
                    onChange={event => handleChange(event.target.value)}
                    maxLength={255}
                    required={true}
                    className="form-control"
                    placeholder="Ex.: Ciência e Tecnologia" />
            </div>
        </div>
    );
}