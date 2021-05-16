import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmpleadoComponent } from './search-empleado.component';

describe('SearchEmpleadoComponent', () => {
  let component: SearchEmpleadoComponent;
  let fixture: ComponentFixture<SearchEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
