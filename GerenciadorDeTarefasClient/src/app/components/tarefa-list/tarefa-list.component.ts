import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Tarefa} from "../../model/tarefa";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {TarefasService} from "../../services/tarefas.service";
import {catchError, Observable, of} from "rxjs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/error-dialog/error-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute, Router} from "@angular/router";
import {relative} from "@angular/compiler-cli";
import {StatusToTextPipe} from "../../shared/pipes/status-to-text.pipe";
import {PrioridadeToTextPipe} from "../../shared/pipes/prioridade-to-text.pipe";


@Component({
  selector: 'app-tarefa-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule, AsyncPipe, NgIf, MatButtonModule, MatIconModule, StatusToTextPipe, PrioridadeToTextPipe],
  templateUrl: './tarefa-list.component.html',
  styleUrl: './tarefa-list.component.scss'
})
export class TarefaListComponent implements OnInit {
  @Input() tarefas: Tarefa[] = [];

  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)
  @Output() delete = new EventEmitter(false)


  readonly displayedColumns = ['titulo', 'descricao', 'prioridade', 'status', 'actions'];

  constructor() {
  }

  ngOnInit(): void {

  }

  onAdd() {
    this.add.emit(true)
  }

  onEdit(tarefa: Tarefa) {
    this.edit.emit(tarefa)
  }

  onDelete(id: number) {
    this.delete.emit(id)
  }
}
