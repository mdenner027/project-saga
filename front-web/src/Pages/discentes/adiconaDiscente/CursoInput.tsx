import React from 'react';

export default function CursoInput() {
    return (
        <div className="col-md-4 pl-1">
            <div className="form-group">
                <label htmlFor="curso">Curso</label>
                <select name="codigoCurso" id="curso" className="form-control">
                    <option value="">{"C&T"}</option>
                    <option value="">LCI</option>
                    <option value="">BSI</option>
                </select>
            </div>
        </div>
    );
}