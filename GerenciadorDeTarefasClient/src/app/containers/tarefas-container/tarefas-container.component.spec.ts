import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasContainerComponent } from './tarefas-container.component';

describe('TarefasContainerComponent', () => {
  let component: TarefasContainerComponent;
  let fixture: ComponentFixture<TarefasContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefasContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
