import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpAboutComponent } from './lp-about.component';

describe('LpAboutComponent', () => {
  let component: LpAboutComponent;
  let fixture: ComponentFixture<LpAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
