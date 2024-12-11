import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngMetodoPagoComponent } from './ing-metodo-pago.component';

describe('IngMetodoPagoComponent', () => {
  let component: IngMetodoPagoComponent;
  let fixture: ComponentFixture<IngMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngMetodoPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
