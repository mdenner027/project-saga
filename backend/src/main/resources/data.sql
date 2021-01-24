INSERT INTO `cursos` (`id_curso`,`cod_mec_curso`, `nome_curso`, `status_curso`) VALUES
(1, 1101840, 'Ciência e Tecnologia - Noturno', 1),
(2, 1105110, 'Ciência e Tecnologia - Integral', 1),
(3, 1117715, 'Computação e Informática', 1),
(4, 1117717, 'Sistemas de Informação', 1),
(5, 1200498, 'Engenharia Civil', 1),
(6, 1231239, 'Contabilidade2', 0),
(7, 1270673, 'Engenharia de Produção', 1),
(8, 1383124, 'Pedagogia', 1),
(9, 6789051, 'Teste1', 0);

INSERT INTO `demandas` (`id_demanda`, `nome_demanda`, `status_demanda`) VALUES
(1, 'Assistência Estudantil', 1),
(2, 'Violência Doméstica', 1),
(3, 'Uso de Substâncias Psicoativas', 1),
(4, 'Demanda de Teste2', 0);

INSERT INTO `encaminhamentos` (`id_encaminhamento`, `nome_encaminhamento`, `status_encaminhamento`) VALUES
(1, 'Sem Encaminhamento Especificado', 1),
(2, 'Encaminhamento Interinstitucional', 1),
(3, 'Encaminhamento Extra Institucional ', 1),
(4, 'Encaminhamento de teste123', 0);

INSERT INTO `tipos` (`id_tipo`, `nome_tipo`, `status_tipo`) VALUES
(1, 'Atendimento Social', 1),
(2, 'Atendimento Psicossocial', 1),
(3, 'Visita Domiciliar', 1),
(4, 'Entrevista Social', 1),
(5, 'teste', 1);

INSERT INTO `discentes` (`id_discente`,`matricula_discente`, `nome_discente`, `rua_discente`, `bairro_discente`, `num_residencia_discente`, `cidade_discente`, `id_curso_discente`, `telefone_discente`, `status_discente`) VALUES
(1, '1231231231', 'qwdqwd', 'qdw', 'wqd', 'qdw', 'qwd', 8, 'qwd', 1),
(2, '1231231239', 'Jila', 'joioij', 'oioj', 'io12', 'ioj182', 1, '12712312983', 1),
(3, '1999999999', 'Jorge', 'hod', 'cod', 'zod', 'zaa', 5, '8888822888', 1),
(4, '2016010897', 'Max Denner Temoteo da Silva', 'Irmã Maria Assunta Fernandes Vieira', 'Dom Elizeu', '431', 'Assú', 4, '84996276013', 1),
(5, '2139129033', 'Marta Andreza de Souza1', 'rua12', 'bairro12', '1234', 'Angicos2', 7, '999999912232132', 0);

INSERT INTO `atendimentos` (
`id_atendimento`, 
`data_hora_atendimento`, 
`id_discente_atendimento`, 
`id_encaminhamento_atendimento`, 
`id_tipo_atendimento`, 
`id_demanda_atendimento`,  
`status_atendimento`
) VALUES
(1, '2019-03-12 00:00:00', 1, 3, 1, 3, 0),
(2, '2020-03-19 00:00:00', 1, 3, 2, 1, 1),
(3, '2020-03-28 00:00:00', 2, 1, 2, 3, 1),
(4, '2020-03-28 00:00:00', 2, 2, 1, 1, 1),
(5, '2020-03-28 00:00:00', 2, 1, 4, 3, 1),
(6, '2020-03-28 00:00:00', 1, 3, 2, 1, 1),
(7, '2020-03-28 00:00:00', 3, 1, 3, 2, 1),
(8, '2020-03-28 00:00:00', 3, 1, 3, 2, 1),
(9, '2020-03-28 00:00:00', 4, 2, 4, 3, 1),
(10, '2020-03-28 00:00:00', 1, 2, 4, 3, 1),
(11, '2020-03-03 00:00:00', 2, 1, 3, 2, 1);
