package br.edu.universidade.saga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.universidade.saga.models.Discente;

public interface DiscenteRepository extends JpaRepository<Discente, Long> {

}
