package br.edu.universidade.saga.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import br.edu.universidade.saga.enums.RegistroStatus;
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

	@JsonBackReference
	@ManyToOne(targetEntity = Curso.class)
	@JoinColumn(name = "id_curso_discente")
	private Curso cursoDiscente;
	
	@Column(name = "status_discente", nullable = false)
	private RegistroStatus statusDiscente;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "discenteAtendimento", targetEntity = Atendimento.class)
	private Set<Atendimento> atendimentosDiscente;

}