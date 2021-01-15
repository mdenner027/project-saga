import React from 'react';

type Props = {
    textoBotao: string;
}

export default function ConfirmarBotao({ textoBotao }: Props) {
    return (
        <div className="col-md-6">
            <div className="form-group">
                <button type="submit"
                    className="form-control btn btn-success">
                    {textoBotao} &nbsp;<i className="now-ui-icons ui-1_check"></i>
                </button>
            </div>
        </div>
    );
}