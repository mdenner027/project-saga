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
@Table(name = "discentes")
@Getter
@Setter
@NoArgsConstructor
public class Discente implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_discente", nullable = false, unique = true)
	private Long idDiscente;

	@Column(name = "matricula_discente", nullable = false, unique = true, length = 10)
	private String matriculaDiscente;

	@Column(name = "nome_discente", nullable = false)
	private String nomeDiscente;

	@Column(name = "rua_discente", nullable = false)
	private String ruaDiscente;

	@Column(name = "bairro_discente", nullable = false, length = 100)
	private String bairroDiscente;

	@Column(name = "num_residencia_discente", nullable = false, length = 5)
	private String numResidenciaDiscente;

	@Column(name = "cidade_discente", nullable = false, length = 100)
	private String cidadeDiscente;

	@Column(name = "telefone_discente", nullable = false, length = 20)
	private String telefoneDiscente;

	@Column(name = "email_discente")
	private String emailDiscente;

}