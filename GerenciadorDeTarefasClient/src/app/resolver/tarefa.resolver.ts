import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import {Tarefa} from '../model/tarefa';
import {TarefasService} from "../services/tarefas.service";

@Injectable({
  providedIn: 'root',
})
export class TarefaResolver {
  constructor(private service: TarefasService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tarefa> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }
    return of({id: 0, titulo: '', descricao: '', prioridade: '', status: false});
  }
}
