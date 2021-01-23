package br.edu.universidade.saga.models;

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
@Table(name = "encaminhamentos")
@Getter
@Setter
@NoArgsConstructor
public class Encaminhamento implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_encaminhamento", nullable = false, unique = true)
	private Long idEncaminhamento;

	@Column(name = "nome_encaminhamento", nullable = false, unique = true)
	private String nomeEncaminhamento;

}
