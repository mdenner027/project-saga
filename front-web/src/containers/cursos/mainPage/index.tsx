import React from 'react';

import ListCard from './listCard';
import MainContainer from '../../../components/mainContainer';
import RegistraCard from '../../../components/registraCard/RegistraCard';

export default function CursosMain() {
    return (
        <MainContainer activeMenu="cursos" headerTitle="Registro de Cursos">
            <RegistraCard link="/cadastrar-curso" title="Curso" />
            <ListCard />
        </MainContainer>
    );
}