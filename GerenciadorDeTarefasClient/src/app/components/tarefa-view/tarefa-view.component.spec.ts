import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaViewComponent } from './tarefa-view.component';

describe('TarefaViewComponent', () => {
  let component: TarefaViewComponent;
  let fixture: ComponentFixture<TarefaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
