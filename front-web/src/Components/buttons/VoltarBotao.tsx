import React from 'react';

export default function VoltarBotao() {
    return (
        <div className="col-md-6">
            <div className="form-group">
                <button
                    type="button"
                    className="btn btn-primary form-control">
                    <i className="now-ui-icons arrows-1_minimal-left" />
                    &nbsp; Voltar
                </button>
            </div>
        </div>
    );
}