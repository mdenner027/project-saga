import { type } from "os";

export type CursoListItem = {
    idCurso: number;
    codMecCurso: number;
    nomeCurso: string;
}

export type CursoInsert = {
    codMecCurso: number;
    nomeCurso: string;
}