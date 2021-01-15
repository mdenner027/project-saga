import React from 'react';

export default function CodigoCursoInput() {
    return (
        <div className="col-md-3 pr-1">
            <div className="form-group">
                <label htmlFor="codigoCurso">Codigo e-Mec</label>
                <input type="text"
                    required={true} id="codigoCurso"
                    name="codigoCurso"
                    className="form-control"
                    maxLength={7}
                    placeholder="Ex.: 1122334" />
            </div>
        </div>
    );
}