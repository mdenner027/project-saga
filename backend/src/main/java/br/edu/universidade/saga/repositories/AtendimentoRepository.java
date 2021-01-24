package br.edu.universidade.saga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.universidade.saga.models.Atendimento;

public interface AtendimentoRepository extends JpaRepository<Atendimento, Long> {

}
