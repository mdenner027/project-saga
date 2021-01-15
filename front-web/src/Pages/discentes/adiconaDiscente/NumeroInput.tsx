import React, { useState } from 'react';

type Props = {
    onChangeNumber: (numberAdress: string) => void;
}
export default function NumeroInput({ onChangeNumber }: Props) {
    const [nuEndereco, setNuEndereco] = useState<string>('');
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeNumber(event.target.value);
        setNuEndereco(event.target.value);
    }
    return (
        <div className="col-2 pl-1 pr-1">
            <div className="form-group">
                <label htmlFor="numero">Número</label>
                <input id="numero"
                    type="text"
                    name="numeroResidenciaDiscente"
                    value={nuEndereco}
                    className="form-control"
                    placeholder="Ex.: 22A"
                    onChange={event => handleNumberChange(event)}
                />
            </div>
        </div>
    );
}
