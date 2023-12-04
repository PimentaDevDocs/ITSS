package com.pimentadesenvolvimento.gerenciadordetarefas.repositories;

import com.pimentadesenvolvimento.gerenciadordetarefas.entities.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TarefasRepository extends JpaRepository<Tarefa, Long> {

    List<Tarefa> findByTituloContainingIgnoreCase(String titulo);
    List<Tarefa> findByStatus(boolean status);
}
