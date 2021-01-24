package br.edu.universidade.saga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.universidade.saga.models.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {

}
