import React from 'react';

export default function NomeEncaminhaInput() {
    return (
        <div className="col-md-12 pr-1">
            <div className="form-group">
                <label htmlFor="encaminhamento">Nome do Encaminhamento</label>
                <input type="text"
                    required={true}
                    id="encaminhamento"
                    name="nomeEncaminhamento"
                    className="form-control"
                    maxLength={255}
                    placeholder="Ex.: Encaminhamento Interinstitucional" />
            </div>
        </div>
    );
}