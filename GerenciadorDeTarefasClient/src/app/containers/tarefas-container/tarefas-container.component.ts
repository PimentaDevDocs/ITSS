import {Component, OnInit} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AsyncPipe, NgIf} from "@angular/common";
import {TarefaListComponent} from "../../components/tarefa-list/tarefa-list.component";
import {catchError, Observable, of} from "rxjs";
import {Tarefa} from "../../model/tarefa";
import {TarefasService} from "../../services/tarefas.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ErrorDialogComponent} from "../../shared/error-dialog/error-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-tarefas-container',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    AsyncPipe,
    NgIf,
    TarefaListComponent
  ],
  templateUrl: './tarefas-container.component.html',
  styleUrl: './tarefas-container.component.scss'
})
export class TarefasContainerComponent implements OnInit {

  tarefas$: Observable<Tarefa[]> | null = null;

  ngOnInit(): void {
  }

  constructor(private tarefasService: TarefasService,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
    this.refresh()
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

  onaAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onEdit(tarefa: Tarefa) {
    this.router.navigate(['edit', tarefa.id], {relativeTo: this.route})
  }

  onDelete(id: number) {
    this.tarefasService.remove(id).subscribe(
      () => {
        this.refresh()
        this.snackBar.open('Tarefa removida com sucesso!', '', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          }
        )
      }, error => this.onError('Erro ao tentar remover tarefa.')
    )
  }

  refresh() {
    this.tarefas$ = this.tarefasService.list()
      .pipe(
        catchError(err => {
          this.onError('Erro ao carregar Tarefas.')
          return of([])
        })
      );
  }
}
