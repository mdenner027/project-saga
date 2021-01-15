import { type } from 'os';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    link: string;
}

export default function VoltarBotao({ link }: Props) {
    return (
        <div className="col-md-6">
            <div className="form-group">
                <Link to={link}>
                    <button
                        type="button"
                        className="btn btn-primary form-control">
                        <i className="now-ui-icons arrows-1_minimal-left" />
                    &nbsp; Voltar
                </button>
                </Link>
            </div>
        </div>
    );
}