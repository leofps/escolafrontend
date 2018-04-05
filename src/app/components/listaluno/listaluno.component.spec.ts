import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalunoComponent } from './listaluno.component';

describe('ListalunoComponent', () => {
  let component: ListalunoComponent;
  let fixture: ComponentFixture<ListalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
