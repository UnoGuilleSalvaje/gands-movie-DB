import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromDuracComponent } from './prom-durac.component';

describe('PromDuracComponent', () => {
  let component: PromDuracComponent;
  let fixture: ComponentFixture<PromDuracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromDuracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromDuracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
