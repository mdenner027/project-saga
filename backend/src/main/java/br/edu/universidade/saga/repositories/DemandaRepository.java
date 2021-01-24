package br.edu.universidade.saga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.universidade.saga.models.Demanda;

public interface DemandaRepository extends JpaRepository<Demanda, Long> {

}
