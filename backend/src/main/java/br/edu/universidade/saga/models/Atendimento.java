package br.edu.universidade.saga.models;

import java.io.Serializable;
import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

import br.edu.universidade.saga.enums.RegistroStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "atendimentos")
@Getter
@Setter
@NoArgsConstructor
public class Atendimento implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_atendimento", nullable = false, unique = true)
	private Long idAtendimento;

	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "data_hora_atendimento", nullable = false)
	private Calendar dataHoraAtendimento;

	@JsonBackReference
	@ManyToOne(targetEntity = Demanda.class)
	@JoinColumn(name = "id_demanda_atendimento", nullable = false)
	private Demanda demandaAtendimento;
	
	@JsonBackReference
	@ManyToOne(targetEntity = Discente.class)
	@JoinColumn(name = "id_discente_atendimento", nullable = false)
	private Discente discenteAtendimento;

	@JsonBackReference
	@ManyToOne(targetEntity = Encaminhamento.class)
	@JoinColumn(name = "id_encaminhamento_atendimento", nullable = false)
	private Encaminhamento encaminhamentoAtendimento;

	@JsonBackReference
	@ManyToOne(targetEntity = Tipo.class)
	@JoinColumn(name = "id_tipo_atendimento", nullable = false)
	private Tipo tipoAtendimento;
	
	@Column(name = "status_atendimento", nullable = false)
	private RegistroStatus statusAtendimento;

}
