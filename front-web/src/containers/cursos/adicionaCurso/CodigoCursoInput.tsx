import React, { useState } from 'react';

type Props = {
    getCodigo: (value: number) => void;
}

export default function CodigoCursoInput({ getCodigo }: Props) {
    const [codigo, setCodigo] = useState<number>();
    const handleChange = (value: number) => {
        setCodigo(Number.isNaN(value) ? 0 : value);
        getCodigo(Number.isNaN(value) ? 0 : value);
    }
    return (
        <div className="col-md-3 pr-1">
            <div className="form-group">
                <label htmlFor="codigoCurso">Codigo e-Mec</label>
                <input type="text"
                    required={true} id="codigoCurso"
                    value={codigo}
                    onChange={event => handleChange(Number.parseInt(event.target.value))}
                    name="codigoCurso"
                    className="form-control"
                    maxLength={7}
                    placeholder="Ex.: 1122334" />
            </div>
        </div>
    );
}