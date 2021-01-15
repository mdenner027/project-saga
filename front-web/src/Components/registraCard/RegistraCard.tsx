import React from 'react';
import { Link } from 'react-router-dom';
import RegistraBotao from '../buttons/RegistraBotao';

/*
    Esse é o card utilizado em todas as páginas, sendo a única 
    variação o texto do botão.
*/

type Props = {
    title: string;
    link: string;
}
export default function RegistraCard({ title, link }: Props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Registrar {title}</h4>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12">
                            <Link style={{ textDecoration: 'none' }} to={link}>
                                <RegistraBotao title={title} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}