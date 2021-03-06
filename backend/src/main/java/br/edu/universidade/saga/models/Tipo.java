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

import br.edu.universidade.saga.enums.RegistroStatus;
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
	
	@Column(name = "status_tipo", nullable = false)
	private RegistroStatus statusTipo;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "tipoAtendimento", targetEntity = Atendimento.class)
	private Set<Atendimento> atendimentosEncaminhamento;
	
}
