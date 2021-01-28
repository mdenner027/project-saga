import React from 'react';
import DadosCurso from './DadosCurso';
import MainContainer from '../../../components/mainContainer';

export default function CadastraCurso() {
    return (
        <MainContainer activeMenu="cursos" headerTitle="Registro de Cursos">
            <DadosCurso />
        </MainContainer>
    );
}