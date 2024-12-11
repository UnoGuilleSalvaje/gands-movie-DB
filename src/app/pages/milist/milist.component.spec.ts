import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilistComponent } from './milist.component';

describe('MilistComponent', () => {
  let component: MilistComponent;
  let fixture: ComponentFixture<MilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
