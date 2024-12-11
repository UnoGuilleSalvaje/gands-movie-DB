import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromUsuarioTresComprasComponent } from './prom-usuario-tres-compras.component';

describe('PromUsuarioTresComprasComponent', () => {
  let component: PromUsuarioTresComprasComponent;
  let fixture: ComponentFixture<PromUsuarioTresComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromUsuarioTresComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromUsuarioTresComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
