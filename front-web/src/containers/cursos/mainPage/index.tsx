import React, { useEffect, useState } from 'react';
import { CursoListItem } from '../../../types/cursoTypes';
import { getCursos } from '../../../api/cursoApi';
import { toast } from 'react-toastify';
import ListCard from './listCard';
import MainContainer from '../../../components/mainContainer';
import RegistraCard from '../../../components/registraCard/RegistraCard';

export default function CursosMain() {
    const [cursos, setCursos] = useState<CursoListItem[]>([]);
    useEffect(() => {
        getCursos()
            .then(response => setCursos(response.data))
            .catch(() => toast.error("Ops! Parece que não foi possível carregar os cursos cadastrados."));
    }, []);
    return (
        <MainContainer activeMenu="cursos" headerTitle="Registro de Cursos">
            <RegistraCard link="/cadastrar-curso" title="Curso" />
            <ListCard cursos={cursos} />
        </MainContainer>
    );
}