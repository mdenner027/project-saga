package br.edu.universidade.saga.services.interfaces;

import java.util.List;

import br.edu.universidade.saga.dtos.curso.CursoInsertDto;
import br.edu.universidade.saga.dtos.curso.CursoListDto;
import br.edu.universidade.saga.dtos.curso.CursoUpdateDto;

public interface CursoInterface {
	List<CursoListDto> findAll();

	CursoInsertDto insert(CursoInsertDto cursoDto);

	CursoUpdateDto update(CursoUpdateDto cursoDto);
	
	void delete(Long idCurso);
}
