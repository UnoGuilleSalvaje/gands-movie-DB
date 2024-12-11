import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolRecPaisComponent } from './tol-rec-pais.component';

describe('TolRecPaisComponent', () => {
  let component: TolRecPaisComponent;
  let fixture: ComponentFixture<TolRecPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TolRecPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TolRecPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
