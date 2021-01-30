package br.edu.universidade.saga.services;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.edu.universidade.saga.dtos.curso.CursoInsertDto;
import br.edu.universidade.saga.dtos.curso.CursoItemDto;
import br.edu.universidade.saga.dtos.curso.CursoUpdateDto;
import br.edu.universidade.saga.enums.RegistroStatus;
import br.edu.universidade.saga.models.Curso;
import br.edu.universidade.saga.repositories.CursoRepository;
import br.edu.universidade.saga.services.interfaces.CursoInterface;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CursoService implements CursoInterface {
	private final CursoRepository cursoRepo;

	@Override
	@Transactional(readOnly = true)
	public List<CursoItemDto> findAll() {
		ModelMapper mapper = new ModelMapper();
		List<CursoItemDto> cursos = new ArrayList<>();
		cursoRepo.findByStatusCursoOrderByNomeCurso(RegistroStatus.ATIVO).forEach(c -> {
			cursos.add(mapper.map(c, CursoItemDto.class));
		});
		return cursos;
	}

	@Override
	@Transactional(readOnly = true)
	public CursoItemDto findById(Long id) {
		ModelMapper mapper = new ModelMapper();
		CursoItemDto curso = mapper.map(cursoRepo.findByIdCurso(id), CursoItemDto.class);
		return curso;
	}

	@Override
	@Transactional
	public CursoInsertDto insert(CursoInsertDto cursoDto) {
		ModelMapper mapper = new ModelMapper();
		Curso curso = new Curso();
		curso = mapper.map(cursoDto, Curso.class);
		curso.setStatusCurso(RegistroStatus.ATIVO);
		curso = cursoRepo.save(curso);
		return mapper.map(curso, CursoInsertDto.class);
	}

	@Override
	@Transactional
	public CursoUpdateDto update(CursoUpdateDto cursoDto) {
		ModelMapper mapper = new ModelMapper();
		Curso curso = new Curso();
		curso = mapper.map(cursoDto, Curso.class);
		curso.setStatusCurso(RegistroStatus.ATIVO);
		curso = cursoRepo.save(curso);
		return mapper.map(curso, CursoUpdateDto.class);
	}

	@Override
	@Transactional
	public void delete(Long idCurso) {
		Curso curso = cursoRepo.getOne(idCurso);
		curso.setStatusCurso(RegistroStatus.INATIVO);
		cursoRepo.save(curso);
	}
}
