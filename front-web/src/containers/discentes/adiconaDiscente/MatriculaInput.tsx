import React from 'react';

export default function MatriculaInput() {
    return (
        <div className="col-md-2 pl-1 pr-1">
            <div className="form-group">
                <label htmlFor="matricula">Matrícula</label>
                <input type="text"
                    id="matricula"
                    list="matriculas"
                    name="matriculaDiscente"
                    className="form-control"
                    maxLength={10}
                    placeholder="Ex.: 2016010800" />
            </div>
        </div>
    );
}