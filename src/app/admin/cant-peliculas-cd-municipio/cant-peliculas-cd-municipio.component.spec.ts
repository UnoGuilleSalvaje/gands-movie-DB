import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantPeliculasCdMunicipioComponent } from './cant-peliculas-cd-municipio.component';

describe('CantPeliculasCdMunicipioComponent', () => {
  let component: CantPeliculasCdMunicipioComponent;
  let fixture: ComponentFixture<CantPeliculasCdMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantPeliculasCdMunicipioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantPeliculasCdMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
