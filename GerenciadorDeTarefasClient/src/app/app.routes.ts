import {Routes} from '@angular/router';
import {TarefaListComponent} from "./components/tarefa-list/tarefa-list.component";
import {TarefaViewComponent} from "./components/tarefa-view/tarefa-view.component";
import {TarefaResolver} from "./resolver/tarefa.resolver";
import {TarefasContainerComponent} from "./containers/tarefas-container/tarefas-container.component";

export const routes: Routes = [
  {
    path: '',
    component: TarefasContainerComponent
  },
  {
    path: 'new',
    component: TarefaViewComponent,
    resolve: {tarefa: TarefaResolver}
  },
  {
    path: 'edit/:id',
    component: TarefaViewComponent,
    resolve: {tarefa: TarefaResolver}
  },
  {
    path: 'view/:id',
    component: TarefaViewComponent,
    resolve: {tarefa: TarefaResolver}
  }
];
