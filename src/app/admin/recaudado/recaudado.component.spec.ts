import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudadoComponent } from './recaudado.component';

describe('RecaudadoComponent', () => {
  let component: RecaudadoComponent;
  let fixture: ComponentFixture<RecaudadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecaudadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecaudadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
