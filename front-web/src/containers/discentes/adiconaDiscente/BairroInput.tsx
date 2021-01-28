import React from 'react';

export default function BairroInput() {
    return (
        <div className="col-md-3 pl-1 pr-1">
            <div className="form-group">
                <label htmlFor="bairro">Bairro</label>
                <input id="bairro"
                    type="text"
                    className="form-control"
                    name="bairroDiscente"
                    placeholder="Ex.: Centro" />
            </div>
        </div>
    );
}