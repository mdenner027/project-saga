package br.edu.universidade.saga.dtos.curso;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CursoInsertDto {
	@ApiModelProperty(
			name = "codMecCurso", 
			required = true,
			example = "1383124",
			dataType = "Long",
			notes = "Código do curso de acordo com o MEC.")
	private Long codMecCurso;

	@ApiModelProperty(
			name = "nomeCurso", 
			required = true,
			example = "Licenciatura em História",
			dataType = "String",
			notes = "Nome do curso de acordo com o MEC.")
	private String nomeCurso;
}
