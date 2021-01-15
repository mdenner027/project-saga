import React from 'react';

export default function CursoInput() {
    return (
        <div className="col-md-4 pl-1">
            <div className="form-group">
                <label htmlFor="curso">Curso</label>
                <select name="codigoCurso" id="curso" className="form-control">
                    <option value="${curso.codigoCurso}">{"C&T"}</option>
                    <option value="${curso.codigoCurso}">LCI</option>
                    <option value="${curso.codigoCurso}">BSI</option>
                </select>
            </div>
        </div>
    );
}