package br.edu.universidade.saga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.universidade.saga.models.Encaminhamento;

public interface EncaminhamentoRepository extends JpaRepository<Encaminhamento, Long> {

}
