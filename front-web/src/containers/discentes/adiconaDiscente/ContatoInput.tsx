import React from 'react';

export default function ContatoInput() {
    return (
        <div className="col-3 pr-1">
            <div className="form-group">
                <label htmlFor="contato">Contato</label>
                <input id="contato"
                    maxLength={15}
                    type="text"
                    name="telefoneDiscente"
                    className="form-control"
                    placeholder="Ex.: 9962744110" />
            </div>
        </div>
    );
}