package br.edu.universidade.saga.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.universidade.saga.enums.RegistroStatus;
import br.edu.universidade.saga.models.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {
	List<Curso> findByStatusCursoOrderByNomeCurso(RegistroStatus status);

	Curso findByIdCurso(Long id);
}
