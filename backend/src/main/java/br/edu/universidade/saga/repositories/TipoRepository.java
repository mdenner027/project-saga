package br.edu.universidade.saga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.universidade.saga.models.Tipo;

public interface TipoRepository extends JpaRepository<Tipo, Long> {

}
