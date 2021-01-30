import axios from 'axios';
import { CursoInsert, CursoListItem } from '../types/cursoTypes';

const API_URL = "http://localhost:8080";

export function getCursos() {
    return axios.get(`${API_URL}/cursos`);
}

export function getCursoById(id: number) {
    return axios.get(`${API_URL}/cursos/${id}`);
}

export function postCurso(payload: CursoInsert) {
    return axios.post(`${API_URL}/cursos`, payload);
}

export function putCurso(payload: CursoListItem) {
    return axios.put(`${API_URL}/cursos`, payload);
}

export function deleteCurso(id: number) {
    return axios.patch(`${API_URL}/cursos/${id}`);
}