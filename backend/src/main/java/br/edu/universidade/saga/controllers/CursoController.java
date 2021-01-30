package br.edu.universidade.saga.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.universidade.saga.dtos.curso.CursoInsertDto;
import br.edu.universidade.saga.dtos.curso.CursoItemDto;
import br.edu.universidade.saga.dtos.curso.CursoUpdateDto;
import br.edu.universidade.saga.services.CursoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;

@Api(tags = "Endpoint Curso", hidden = true)
@RestController
@RequestMapping(value = "/cursos")
@AllArgsConstructor
public class CursoController {

	private final CursoService cursoService;

	@ApiOperation(
			value = "Endpoint para listar todos os cursos por ordem alfabética.",
			httpMethod = "GET",
			response = CursoItemDto.class,
			responseContainer = "List")
	@GetMapping
	public ResponseEntity<List<CursoItemDto>> findAll() {
		return ResponseEntity.status(HttpStatus.OK).body(cursoService.findAll());
	}
	
	@ApiOperation(
			value = "Endpoint para buscar um registro específico.",
			httpMethod = "GET",
			response = CursoItemDto.class)
	@GetMapping("/{idCurso}")
	public ResponseEntity<CursoItemDto> findById(@PathVariable Long idCurso){
		return ResponseEntity.status(HttpStatus.OK).body(cursoService.findById(idCurso));
	}
	
	@ApiOperation(
			value = "Endpoint para cadastrar um novo curso.",
			httpMethod = "POST",
			response = CursoInsertDto.class)
	@PostMapping
	public ResponseEntity<CursoInsertDto> insert(@RequestBody CursoInsertDto curso) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cursoService.insert(curso));
	}
	
	@ApiOperation(
			value = "Endpoint para atualizar o registro de um curso.",
			httpMethod = "PUT",
			response = CursoUpdateDto.class)
	@PutMapping
	public ResponseEntity<CursoUpdateDto> update(@RequestBody CursoUpdateDto curso){
		return ResponseEntity.status(HttpStatus.OK).body(cursoService.update(curso));
	}
	
	@ApiOperation(
			value = "Endpoint para \"inativar\" um registro.",
			httpMethod = "PATCH",
			response = Void.class)
	@PatchMapping("/{idCurso}")
	public ResponseEntity<Void> delete(@PathVariable Long idCurso){
		cursoService.delete(idCurso);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
