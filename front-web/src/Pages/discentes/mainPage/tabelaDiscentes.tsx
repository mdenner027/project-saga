import React from 'react';

export default function TabelaDiscentes() {
    return (
        <div className="table table-hover table-responsive">
            <table className="table">
                <thead className="text-primary">
                    <tr>
                        <th>
                            <b>Matrícula</b>
                        </th>
                        <th>
                            <b>Nome</b>
                        </th>
                        <th>
                            <b>Cidade</b>
                        </th>
                        <th>
                            <b>Curso</b>
                        </th>
                        <th>
                            <b><span className="d-flex justify-content-center">Detalhes</span></b>
                        </th>
                        <th>
                            <b><span className="d-flex justify-content-center">Excluir</span></b>
                        </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}