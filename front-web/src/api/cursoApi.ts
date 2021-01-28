import axios from 'axios';
import { CursoInsert } from '../types/cursoTypes';

const API_URL = "http://localhost:8080";

export function getCursos() {
    return axios.get(`${API_URL}/cursos`);
}

export function postCurso(payload: CursoInsert) {
    return axios.post(`${API_URL}/cursos`, payload);
}