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

	@Column(name = "status_encaminhamento", nullable = false)
	private RegistroStatus statusEncaminhamento;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "encaminhamentoAtendimento", targetEntity = Atendimento.class)
	private Set<Atendimento> atendimentosEncaminhamento;

}
