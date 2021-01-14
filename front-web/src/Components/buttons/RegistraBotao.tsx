import React from 'react';

// Esse e o botão utilizado em todos os cards de registro

type Props = {
    title: string;
}

export default function RegistraBotao({ title }: Props) {
    return (
        <button title={`Registrar ${title}`} type="submit" className="btn btn-info btn-block redondo">
            Registrar {title.endsWith('a') ? 'Nova' : 'Novo'} {title} &nbsp;
            <i className="now-ui-icons ui-1_simple-add"></i>
        </button>
    );
}