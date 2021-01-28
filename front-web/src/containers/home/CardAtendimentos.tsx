import React from 'react';

export default function CardAtendimentos() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Números de Atendimentos</h4>
                    </div>
                    <div className="card-body">
                        <div className="table table-hover table-responsive">
                            <table className="table">
                                <thead className="text-primary">
                                    <tr>
                                        <th className="d-flex justify-content-center">
                                            <span className="d-flex justify-content-center"><b>#</b></span>
                                        </th>
                                        <th>
                                            <b><span className="d-flex justify-content-center">Quantidade de Atendimentos</span></b>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="center">Quantidade de Atendimentos Nesse Mês</td>
                                        <td className="d-flex justify-content-center">$metricas.qtdAtendimentosMes</td>
                                    </tr>
                                    <tr>
                                        <td align="center">Quantidade de Atendimentos Nesse Ano</td>
                                        <td className="d-flex justify-content-center">$metricas.qtdAtendimentosAno</td>
                                    </tr>
                                    <tr>
                                        <td align="center">Quantidade de Atendimentos no Total</td>
                                        <td className="d-flex justify-content-center">$metricas.qtdAtendimentosTotal</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}