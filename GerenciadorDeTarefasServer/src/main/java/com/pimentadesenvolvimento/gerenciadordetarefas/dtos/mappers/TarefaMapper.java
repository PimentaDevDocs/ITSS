package com.pimentadesenvolvimento.gerenciadordetarefas.dtos.mappers;

import com.pimentadesenvolvimento.gerenciadordetarefas.dtos.TarefaDTO;
import com.pimentadesenvolvimento.gerenciadordetarefas.entities.Tarefa;
import org.springframework.stereotype.Component;

@Component
public class TarefaMapper {

    public Tarefa toModel(TarefaDTO tarefaDTO) {
        Tarefa tarefa = new Tarefa();
        tarefa.setId(tarefaDTO.getId());
        tarefa.setTitulo(tarefaDTO.getTitulo());
        tarefa.setDescricao(tarefaDTO.getDescricao());
        tarefa.setPrioridade(tarefaDTO.getPrioridade());
        tarefa.setStatus(tarefaDTO.isStatus());

        return tarefa;
    }

    public TarefaDTO toDTO(Tarefa tarefa) {
        TarefaDTO tarefaDTO = new TarefaDTO();
        tarefaDTO.setId(tarefa.getId());
        tarefaDTO.setTitulo(tarefa.getTitulo());
        tarefaDTO.setDescricao(tarefa.getDescricao());
        tarefaDTO.setPrioridade(tarefa.getPrioridade());
        tarefaDTO.setStatus(tarefa.isStatus());

        return tarefaDTO;
    }

}
