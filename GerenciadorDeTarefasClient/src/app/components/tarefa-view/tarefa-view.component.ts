import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {Tarefa} from "../../model/tarefa";
import {TarefasService} from "../../services/tarefas.service";
import {Location, NgForOf, NgIf} from "@angular/common";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import {StatusToTextPipe} from "../../shared/pipes/status-to-text.pipe";
import {FormUtilsService} from "../../shared/services/form-utils.service";
import {ErrorDialogComponent} from "../../shared/error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-tarefa-view',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSelectModule, StatusToTextPipe, NgForOf, NgIf],
  templateUrl: './tarefa-view.component.html',
  styleUrl: './tarefa-view.component.scss'
})
export class TarefaViewComponent implements OnInit {

  form: FormGroup;
  prioridades = [{
    value: 0,
    prioridade: 'Alta'
  }, {
    value: 1,
    prioridade: 'Média'
  }, {
    value: 2,
    prioridade: 'Baixa'
  }
  ]

  isConcluida = [{
    value: true,
    prioridade: 'Concluida'
  }, {
    value: false,
    prioridade: 'Pendente'
  }
  ]

  constructor(private formBuilder: FormBuilder,
              private tarefaService: TarefasService,
              private location: Location,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              public formUtils: FormUtilsService) {
    this.form = formBuilder.group({
      id: [null],
      titulo: [null, Validators.required],
      descricao: [null, Validators.required],
      prioridade: [null, [Validators.required]],
      status: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    const tarefa: Tarefa = this.route.snapshot.data['tarefa'];
    // @ts-ignore
    const path: string = this.route.snapshot.url.at(0).path;

    if (tarefa.id) {
      console.log(tarefa)
      this.form.patchValue({
        id: tarefa.id,
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        prioridade: tarefa.prioridade,
        status: tarefa.status,

      })
    } else if (path === 'view') {

      this.form.disable()

    }
  }

  protected readonly oncancel = oncancel;

  onCancel() {
    this.location.back()
  }

  onSubmmit() {
    console.log(this.form.value)
    this.tarefaService.save(this.form.value).subscribe(
      next => {
        this.onSuccess()
      },
      error => {
        this.onError()
      }
    )

  }

  private onError() {
    this.dialog.open(ErrorDialogComponent, {
      data: 'Erro ao salvar tarefa.'
    });
  }

  private onSuccess() {
    this.snackBar.open('Tarefa salva com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  getErrorMessage(fieldName: string): string {
    return this.formUtils.getFieldErrorMessage(this.form, fieldName);
  }
}
