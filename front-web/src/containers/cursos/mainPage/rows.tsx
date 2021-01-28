import React from 'react';
import DeletaButton from '../../../components/buttons/DeletaBotao';
import ExibeButton from '../../../components/buttons/ExibeBotao';

type Props = {
    codigo: number;
    nome: string;
}

export default function Rows({ codigo, nome }: Props) {
    return (
        <tr>
            <td>{codigo}</td>
            <td>{nome}</td>
            <td><ExibeButton /></td>
            <td><DeletaButton /></td>
        </tr>
    );
}