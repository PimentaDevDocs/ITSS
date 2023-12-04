package com.pimentadesenvolvimento.gerenciadordetarefas.controllers;

import com.pimentadesenvolvimento.gerenciadordetarefas.dtos.TarefaDTO;
import com.pimentadesenvolvimento.gerenciadordetarefas.services.TarefasService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequestMapping("api/tarefas")
@CrossOrigin(origins = "http://localhost:4200")
public class TarefasController {

    public final TarefasService tarefasService;

    public TarefasController(TarefasService tarefasService) {
        this.tarefasService = tarefasService;
    }

    @PostMapping("/importarTarefas")
    @ApiResponse(description = "Importar Tarefas")
    public ResponseEntity<List<TarefaDTO>> saveAll(@RequestBody List<TarefaDTO> tarefaDTOList) {

        List<TarefaDTO> novasTarefas = tarefasService.saveAll(tarefaDTOList);

        return new ResponseEntity<>(novasTarefas, HttpStatus.CREATED);
    }

    @PostMapping
    @ApiResponse(description = "Salvar ou alterar tarefas")
    public TarefaDTO save(@RequestBody TarefaDTO tarefaDTO) {
        return tarefasService.save(tarefaDTO);
    }

    @PutMapping
    @ApiResponse(description = "Atualizar titulo, descricao e prioridade da tarefa")
    public TarefaDTO update(@RequestBody TarefaDTO tarefaDTO) {
        return tarefasService.update(tarefaDTO);
    }

    @GetMapping
    @ApiResponse(description = "Listar todas tarefas sem parametros")
    public List<TarefaDTO> findAll() {
        return tarefasService.findAll();
    }

    @GetMapping("/searchByStatus")
    @ApiResponse(description = "Listar todas tarefas pelo status")
    public List<TarefaDTO> findByStatus(@RequestParam @NotNull boolean status) {
        return tarefasService.findByStatus(status);
    }

    @GetMapping("/{id}")
    @ApiResponse(description = "Procurar tarefa por id")
    public TarefaDTO findByStatus(@PathVariable @NotNull Long id) {
        return tarefasService.findById(id);
    }

    @GetMapping("/changeStatus/{id}")
    @ApiResponse(description = "Inverter status da tarefa")
    public TarefaDTO changeStatus(@PathVariable @NotNull Long id) {
        return tarefasService.changeStatus(id);
    }

    @DeleteMapping("/{id}")
    @ApiResponse(description = "Deletar tarefa")
    public void delete(@PathVariable @NotNull Long id) {
        tarefasService.delete(id);
    }

}
