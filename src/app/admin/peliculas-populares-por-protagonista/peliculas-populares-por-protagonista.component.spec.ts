import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPopularesPorProtagonistaComponent } from './peliculas-populares-por-protagonista.component';

describe('PeliculasPopularesPorProtagonistaComponent', () => {
  let component: PeliculasPopularesPorProtagonistaComponent;
  let fixture: ComponentFixture<PeliculasPopularesPorProtagonistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasPopularesPorProtagonistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasPopularesPorProtagonistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
