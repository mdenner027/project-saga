import React, { useState } from 'react';

type Props = {
    getNomeCurso: (value:string) => void;
}

export default function NomeCursoInput({ getNomeCurso }: Props) {
    const [nome, setNome] = useState("");

    const handleChange = (value: string) => {
        setNome(value);
        getNomeCurso(value);
    }
    return (
        <div className="col-md-9">
            <div className="form-group">
                <label htmlFor="nome">Nome do curso</label>
                <input type="text"
                    id="nome"
                    name="nomeCurso"
                    value={nome}
                    onChange={event => handleChange(event.target.value)}
                    maxLength={255}
                    required={true}
                    className="form-control"
                    placeholder="Ex.: Ciência e Tecnologia" />
            </div>
        </div>
    );
}