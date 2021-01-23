package br.edu.ufersa.saga.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "demandas")
@Getter
@Setter
@NoArgsConstructor
public class Demanda implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_demanda", nullable = false, unique = true)
	private Long idDemanda;

	@Column(name = "nome_demanda", nullable = false, unique = true)
	private String nomeDemanda;

}
