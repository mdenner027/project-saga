import React from 'react';
import RegistraBotao from '../buttons/RegistraBotao';

/*
    Esse é o card utilizado em todas as páginas, sendo a única 
    variação o texto do botão.
*/

type Props = {
    title: string;
}
export default function RegistraCard({ title }: Props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Registrar {title}</h4>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12">
                            <RegistraBotao title={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}