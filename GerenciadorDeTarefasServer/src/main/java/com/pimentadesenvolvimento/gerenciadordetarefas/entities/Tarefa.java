package com.pimentadesenvolvimento.gerenciadordetarefas.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Data
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotBlank(message = "O título não pode estar em branco")
    @Column
    private String titulo;

    @NotNull
    @NotBlank(message = "A descrição não pode estar em branco")
    @Column
    private String descricao;

    @NotNull
    @Column
    private Integer prioridade;

    @NotNull
    @Column
    private boolean status;
}
