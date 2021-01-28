import React from 'react';

export default function NomeInput() {
    return (
        <div className="col-md-6 pr-1">
            <div className="form-group">
                <label htmlFor="nome">Nome do Discente</label>
                <input type="text"
                    id="nome"
                    name="nomeDiscente"
                    list="nomes"
                    className="form-control"
                    placeholder="Ex.: João Costa Figuereido" />
            </div>
        </div>
    );
}