import React from 'react';

export default function NomeCursoInput() {
    return (
        <div className="col-md-9">
            <div className="form-group">
                <label htmlFor="nome">Nome do curso</label>
                <input type="text" 
                    id="nome" 
                    name="nomeCurso" 
                    maxLength={255} 
                    required={true} 
                    className="form-control" 
                    placeholder="Ex.: Ciência e Tecnologia" />
            </div>
        </div>
    );
}