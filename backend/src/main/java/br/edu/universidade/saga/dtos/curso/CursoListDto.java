package br.edu.universidade.saga.dtos.curso;

import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModelProperty.AccessMode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CursoListDto {
	@ApiModelProperty(
			position = 1,
			name = "idCurso", 
			example = "2",
			dataType = "Long",
			notes = "Identificador numérico do curso na base de dados.",
			accessMode = AccessMode.READ_ONLY)
	private Long idCurso;
	
	@ApiModelProperty(
			position = 2,
			name = "codMecCurso", 
			example = "1383124",
			dataType = "Long",
			notes = "Código do curso de acordo com o MEC.",
			accessMode = AccessMode.READ_ONLY)
	private Long codMecCurso;

	@ApiModelProperty(
			position = 3,
			name = "nomeCurso", 
			example = "Licenciatura em História",
			dataType = "String",
			notes = "Nome do curso de acordo com o MEC.",
			accessMode = AccessMode.READ_ONLY)
	private String nomeCurso;
}
