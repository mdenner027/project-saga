package br.edu.ufersa.saga.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tipos")
@Getter
@Setter
@NoArgsConstructor
public class Tipo implements Serializable {
	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_tipo", unique = true, nullable = false)
	private Long idTipo;

	@Column(name = "nome_tipo", unique = true, nullable = false)
	private String nomeTipo;
}
