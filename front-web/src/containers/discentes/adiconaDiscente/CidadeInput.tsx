import React from 'react';

export default function CidadeInput() {
    return (
        <div className="col-4 pl-1">
            <div className="form-group">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade"
                    type="text"
                    name="cidadeDiscente"
                    className="form-control"
                    placeholder="Ex.: Angicos" />
            </div>
        </div>
    );
}