package com.pimentadesenvolvimento.gerenciadordetarefas.enums;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public enum Prioridade {
    PRIORIDADE_ALTA("Alta"),
    PRIORIDADE_MEDIA("Média"),
    PRIORIDADE_BAIXA("Baixa");

    private final String value;

    Prioridade(String value) {
        this.value = value;
    }

}
