import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotDescuentoPorCuponComponent } from './tot-descuento-por-cupon.component';

describe('TotDescuentoPorCuponComponent', () => {
  let component: TotDescuentoPorCuponComponent;
  let fixture: ComponentFixture<TotDescuentoPorCuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotDescuentoPorCuponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotDescuentoPorCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
