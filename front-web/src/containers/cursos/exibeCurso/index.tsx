import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AlteraCurso from './AlteraCurso';
import MainContainer from '../../../components/mainContainer';

export default function ExibeCurso() {
    const loc = useLocation();
    const [id] = useState<number>(loc.state as number);
    return (
        <MainContainer headerTitle="Registro de Cursos" activeMenu="cursos">
            <AlteraCurso id={id} />
        </MainContainer>
    );
}