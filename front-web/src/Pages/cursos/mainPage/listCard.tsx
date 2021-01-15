import React from 'react';
import TabelaCurso from './tabelaCurso';

export default function ListCard() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Cursos Registrados</h4>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12">
                            <TabelaCurso />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}