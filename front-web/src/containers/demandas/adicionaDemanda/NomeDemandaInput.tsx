import React from 'react';

export default function NomeDemandaInput() {
    return (
        <div className="col-md-12 pr-1">
            <div className="form-group">
                <label htmlFor="codigoCurso">Nome da demanda</label>
                <input type="text" 
                    required={true} 
                    id="nomeDemanda" 
                    name="nomeDemandaAtendimento" 
                    className="form-control" 
                    maxLength={255} 
                    placeholder="Ex.: Violência Doméstica" />
            </div>
        </div>
    );
}