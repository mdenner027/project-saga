package br.edu.universidade.saga.services;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.edu.universidade.saga.dtos.curso.CursoInsertDto;
import br.edu.universidade.saga.dtos.curso.CursoListDto;
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
	public List<CursoListDto> findAll() {
		ModelMapper mapper = new ModelMapper();
		List<CursoListDto> cursos = new ArrayList<>();
		cursoRepo.findByStatusCursoOrderByNomeCurso(RegistroStatus.ATIVO).forEach(c -> {
			cursos.add(mapper.map(c, CursoListDto.class));
		});
		return cursos;
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
		Curso curso = cursoRepo.getOne(cursoDto.getIdCurso());
		curso = mapper.map(cursoDto, Curso.class);
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
