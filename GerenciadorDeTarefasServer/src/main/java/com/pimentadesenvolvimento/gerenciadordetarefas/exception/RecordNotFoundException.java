package com.pimentadesenvolvimento.gerenciadordetarefas.exception;

public class RecordNotFoundException extends RuntimeException {

    public RecordNotFoundException(Long id) {
        super("Não foi possível encontrar a tarefa " + id);
    }
}
