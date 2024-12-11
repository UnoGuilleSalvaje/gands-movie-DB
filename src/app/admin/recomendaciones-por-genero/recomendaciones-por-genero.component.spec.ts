import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesPorGeneroComponent } from './recomendaciones-por-genero.component';

describe('RecomendacionesPorGeneroComponent', () => {
  let component: RecomendacionesPorGeneroComponent;
  let fixture: ComponentFixture<RecomendacionesPorGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendacionesPorGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendacionesPorGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
