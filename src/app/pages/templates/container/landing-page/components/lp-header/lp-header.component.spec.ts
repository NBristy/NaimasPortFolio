import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpHeaderComponent } from './lp-header.component';

describe('LpHeaderComponent', () => {
  let component: LpHeaderComponent;
  let fixture: ComponentFixture<LpHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
