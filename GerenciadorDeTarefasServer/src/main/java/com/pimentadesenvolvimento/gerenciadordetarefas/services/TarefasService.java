package com.pimentadesenvolvimento.gerenciadordetarefas.services;

import com.pimentadesenvolvimento.gerenciadordetarefas.dtos.TarefaDTO;
import com.pimentadesenvolvimento.gerenciadordetarefas.dtos.mappers.TarefaMapper;
import com.pimentadesenvolvimento.gerenciadordetarefas.exception.RecordNotFoundException;
import com.pimentadesenvolvimento.gerenciadordetarefas.repositories.TarefasRepository;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class TarefasService {
    public final TarefasRepository tarefasRepository;
    public final TarefaMapper tarefaMapper;

    public TarefasService(TarefasRepository tarefasRepository, TarefaMapper tarefaMapper) {
        this.tarefasRepository = tarefasRepository;
        this.tarefaMapper = tarefaMapper;
    }

    public TarefaDTO changeStatus(@NotNull Long id) {
        TarefaDTO tarefaDTO = findById(id);
        tarefaDTO.setStatus(!tarefaDTO.isStatus());
        return save(tarefaDTO);
    }

    public List<TarefaDTO> saveAll(@NotNull List<TarefaDTO> tarefaDTOList) {
        return tarefasRepository.saveAll(tarefaDTOList.stream().map(tarefaMapper::toModel).toList()).stream().map(tarefaMapper::toDTO).toList();
    }

    public TarefaDTO save(@NotNull TarefaDTO tarefaDTO) {
        return tarefaMapper.toDTO(tarefasRepository.save(tarefaMapper.toModel(tarefaDTO)));
    }

    public TarefaDTO update(@NotNull TarefaDTO tarefaDTO) {
        TarefaDTO novaTarefa = findById(tarefaDTO.getId());
        novaTarefa.setTitulo(tarefaDTO.getTitulo());
        novaTarefa.setDescricao(tarefaDTO.getDescricao());
        novaTarefa.setPrioridade(tarefaDTO.getPrioridade());
        return tarefaMapper.toDTO(tarefasRepository.save(tarefaMapper.toModel(novaTarefa)));
    }

    public void delete(@NotNull Long id) {

        tarefasRepository.delete(tarefasRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }

    public List<TarefaDTO> findByStatus(@NotNull boolean status) {
        return tarefasRepository.findByStatus(status).stream().map(tarefaMapper::toDTO).toList();
    }

    public TarefaDTO findById(@NotNull Long id) {
        return tarefasRepository.findById(id)
                .map(tarefaMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public List<TarefaDTO> findAll() {
        return tarefasRepository.findAll().stream().map(tarefaMapper::toDTO).toList();
    }


}
