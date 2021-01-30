package br.edu.universidade.saga.services.interfaces;

import java.util.List;

import br.edu.universidade.saga.dtos.curso.CursoInsertDto;
import br.edu.universidade.saga.dtos.curso.CursoItemDto;
import br.edu.universidade.saga.dtos.curso.CursoUpdateDto;

public interface CursoInterface {
	List<CursoItemDto> findAll();

	CursoInsertDto insert(CursoInsertDto cursoDto);

	CursoUpdateDto update(CursoUpdateDto cursoDto);
	
	void delete(Long idCurso);
	
	CursoItemDto findById(Long id);
}
