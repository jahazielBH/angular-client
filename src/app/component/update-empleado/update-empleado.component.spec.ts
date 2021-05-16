import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpleadoComponent } from './update-empleado.component';

describe('UpdateEmpleadoComponent', () => {
  let component: UpdateEmpleadoComponent;
  let fixture: ComponentFixture<UpdateEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
