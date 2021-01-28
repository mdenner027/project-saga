import React from 'react';

type Props = {
    textoBotao: string;
    onSubmit?: (event:React.FormEvent<HTMLButtonElement>) => void;
}

export default function ConfirmarBotao({ textoBotao, onSubmit }: Props) {
    return (
        <div className="col-md-6">
            <div className="form-group">
                <button  type="submit"
                    className="form-control btn btn-success">
                    {textoBotao} &nbsp;<i className="now-ui-icons ui-1_check"></i>
                </button>
            </div>
        </div>
    );
}