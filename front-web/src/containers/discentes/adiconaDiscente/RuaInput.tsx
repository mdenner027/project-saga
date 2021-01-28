import React from 'react';

export default function RuaInput() {
    return (
        <div className="col-md-3 pr-1">
            <div className="form-group">
                <label htmlFor="rua">Rua</label>
                <input type="text"
                    id="rua"
                    name="ruaDiscente"
                    className="form-control"
                    placeholder="Ex.: João Barbosa Figuereido" />
            </div>
        </div>
    );
}