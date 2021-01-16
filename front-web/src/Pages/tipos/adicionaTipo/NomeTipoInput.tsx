import React from 'react';

export default function NomeTipoInput() {
    return (
        <div className="col-md-12 pr-1">
            <div className="form-group">
                <label htmlFor="tipo">Nome do Tipo de Atendimento</label>
                <input type="text"
                    required={true}
                    id="tipo"
                    name="nomeTipoAtendimento"
                    className="form-control"
                    maxLength={255}
                    placeholder="Ex.: Atendimento Psicossocial" />
            </div>
        </div>
    );
}