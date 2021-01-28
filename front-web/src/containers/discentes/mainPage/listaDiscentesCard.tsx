import React from 'react';
import TabelaDiscentes from './tabelaDiscentes';

export default function ListaDiscenetesCard() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Discentes Registrados</h4>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12">
                            <TabelaDiscentes >
                                
                            </TabelaDiscentes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}