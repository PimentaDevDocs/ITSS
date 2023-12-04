package com.pimentadesenvolvimento.gerenciadordetarefas.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TarefaDTO {
    private Long id;
    private String titulo;
    private String descricao;
    private Integer prioridade;
    private boolean status;
}