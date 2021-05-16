import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDepartamentoComponent } from './search-departamento.component';

describe('SearchDepartamentoComponent', () => {
  let component: SearchDepartamentoComponent;
  let fixture: ComponentFixture<SearchDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
