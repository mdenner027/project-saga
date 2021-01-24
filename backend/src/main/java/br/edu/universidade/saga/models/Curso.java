package br.edu.universidade.saga.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cursos")
@Getter
@Setter
@NoArgsConstructor
public class Curso implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_curso", nullable = false, unique = true)
	private Long idCurso;

	@Column(name = "cod_mec_curso", nullable = false, unique = true)
	private Long codMecCurso;

	@Column(name = "nome_curso", nullable = false, unique = true)
	private String nomeCurso;

	@JsonManagedReference
	@OneToMany(mappedBy = "cursoDiscente", targetEntity = Discente.class)
	private Set<Discente> discentesCurso;

}
