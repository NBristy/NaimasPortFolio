import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpServiceComponent } from './lp-service.component';

describe('LpServiceComponent', () => {
  let component: LpServiceComponent;
  let fixture: ComponentFixture<LpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
