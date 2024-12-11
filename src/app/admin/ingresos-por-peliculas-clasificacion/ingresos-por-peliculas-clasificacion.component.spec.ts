import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosPorPeliculasClasificacionComponent } from './ingresos-por-peliculas-clasificacion.component';

describe('IngresosPorPeliculasClasificacionComponent', () => {
  let component: IngresosPorPeliculasClasificacionComponent;
  let fixture: ComponentFixture<IngresosPorPeliculasClasificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosPorPeliculasClasificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresosPorPeliculasClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
