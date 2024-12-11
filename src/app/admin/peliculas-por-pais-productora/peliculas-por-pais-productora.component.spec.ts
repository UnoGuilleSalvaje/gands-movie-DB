import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPorPaisProductoraComponent } from './peliculas-por-pais-productora.component';

describe('PeliculasPorPaisProductoraComponent', () => {
  let component: PeliculasPorPaisProductoraComponent;
  let fixture: ComponentFixture<PeliculasPorPaisProductoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasPorPaisProductoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasPorPaisProductoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
