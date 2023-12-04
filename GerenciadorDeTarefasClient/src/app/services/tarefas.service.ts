import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {first} from 'rxjs';

import {Tarefa} from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private readonly API = 'http://localhost:8080/api/tarefas';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Tarefa[]>(this.API)
      .pipe(
        first(),
        // tap(data => console.log(data))
      )
      ;
  }

  getById(id: string) {
    return this.http.get<Tarefa>(`${this.API}/${id}`).pipe(first());
  }

  save(record: Tarefa) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private update(record: Tarefa) {
    return this.http.put<Tarefa>(this.API, record).pipe(first());
  }

  private create(record: Tarefa) {
    return this.http.post<Tarefa>(this.API, record).pipe(first());
  }

  remove(id: number) {
    return this.http.delete<Tarefa>(`${this.API}/${id}`).pipe(first());
  }
}


